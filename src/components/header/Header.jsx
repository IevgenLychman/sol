// import React, { useState } from 'react';
// import Logo from '../Logo/Logo';
// import { AuthNav, UserNav, Nav } from '../Nav';
// import MobileMenu from '../MobileMenu/MobileMenu';
import { FiPhone, FiMail } from 'react-icons/fi';
import Container from '../Container/Container';
import Logo from 'components/Logo/Logo';

import {
  HeaderWrapper,
  HeaderText,
  HeaderTitle,
  HeaderSubtitle,
  HeaderContacts,
  HeaderList,
} from './HeaderStyled';

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Logo />
        <HeaderText>
          <HeaderTitle>Солопіхін Олег Леонідович</HeaderTitle>
          <HeaderSubtitle>Митний брокер</HeaderSubtitle>
        </HeaderText>

        <HeaderContacts>
          <HeaderList>
            <a href="mailto:info@devstudio.com">
              <FiMail /> luckybroke@ukr.net
            </a>
          </HeaderList>
          <HeaderList>
            <a href="tel:+380679515231">
              <FiPhone />
              +38 097 951 52 31
            </a>
          </HeaderList>
        </HeaderContacts>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
