import { useNavigate } from 'react-router-dom';
import { HeaderNav } from './headerparts/HeaderNav';

const luxuryNavStyle = {
  headerProps: {},
  logoClassName: '',
  navLinkClassName: '',
  showIcons: false,
};

const Header = ({ businessName }) => {
  const navigate = useNavigate();
  return (
    <HeaderNav style={luxuryNavStyle} navigate={navigate} heading={businessName} />
  );
};

export default Header;