import { NavLink } from 'react-router-dom';

import LogoImg from '../../images/logo';

import { LogoWraper } from './LogoStyled';

const Logo = () => {
  return (
    <NavLink to="/main">
      <LogoWraper>
        <LogoImg />
      </LogoWraper>
    </NavLink>
  );
};

export default Logo;
