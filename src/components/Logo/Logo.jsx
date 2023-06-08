import { NavLink } from 'react-router-dom';

import LogoIcon from '../../images/logo';

import { LogoWraper } from './LogoStyled';

const Logo = () => {
  return (
    <NavLink to="/main">
      <LogoWraper>
        <LogoIcon />
      </LogoWraper>
    </NavLink>
  );
};

export default Logo;
