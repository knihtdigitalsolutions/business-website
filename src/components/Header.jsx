import { useNavigate } from 'react-router-dom';
import { HomeHeaderNav } from './headerparts/HeaderNav';

const luxuryNavStyle = {
  headerProps: {},
  logoClassName: '',
  navLinkClassName: '',
  showIcons: false,
};

const Header = () => {
  const navigate = useNavigate();
  return (
    <HomeHeaderNav style={luxuryNavStyle} navigate={navigate} />
  );
};

export default Header;