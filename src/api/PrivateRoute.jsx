import React from 'react';
// import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router';
// import { useAuthContext } from '../context/AuthContext'; // Import the auth context
import Loader from '../components/Loader';

const PrivateRoute = ({ role }) => {
  // const { isAuthenticated, user, loading } = useAuthContext(); // Get auth state from context
  const isAuthenticated = true 
  const  user = {role: 'Admin', name: 'John Doe'};
  const loading = false;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/home" replace state={{ from: window.location.pathname }} />;
  }

  if (user?.role !== role) {
    return <Navigate to="/home" replace />;
  }

  // If the user is authenticated and has the correct role, render the child routes
  return <Outlet />; // children
};

// PrivateRoute.propTypes = {
//   role: PropTypes.oneOf([
//     'Admin',
//     'Doctor',
//     'Nurse',
//     'Lab Technician',
//     'Receptionist',
//     'Pharmacist'
//   ]).isRequired,
// };

export default PrivateRoute;
