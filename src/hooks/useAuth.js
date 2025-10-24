import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../api/makeRequest';
import { useMessageContext } from '../context/MessageContext';
import { useStatusContext } from '../context/StatusContext';

const useAuth = () => {
  const messageContext = useMessageContext();
  const statusContext = useStatusContext();
  const navigate = useNavigate();

  const refreshAccessToken = async () => {
    try {
      const res = await makeRequest.post(`/auth/refresh`);

      const data = await res.json();
      if (res.ok) {
        const newToken = data.accessToken;
        const decoded = jwtDecode(newToken);
        const role = decoded?.usersession?.userrole?.role_name;

        localStorage.setItem('user', newToken);
        localStorage.setItem('in', role);

        return newToken;
      } else {
        messageContext.setErrMsg(data.message || 'Session expired');
        navigate('/login');
        return null;
      }
    } catch (err) {
      console.error('Token refresh error:', err);
      messageContext.setErrMsg('Could not refresh session');
      navigate('/login');
      return null;
    }
  };

  const getValidToken = async () => {
    const token = localStorage.getItem('user');
    if (!token) {
      navigate('/login');
      return null;
    }

    try {
      const decoded = jwtDecode(token);
      const isExpired = decoded.exp * 1000 < Date.now();

      if (isExpired) {
        return await refreshAccessToken();
      }

      return token;
    } catch (err) {
      console.error('Invalid token:', err);
      return await refreshAccessToken();
    }
  };

  useEffect(() => {
    getValidToken();
  }, []);

  return { getValidToken };
};

export default useAuth;
