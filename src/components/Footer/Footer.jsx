// import React, { useState } from 'react';
// import Logo from '../Logo/Logo';
// import { AuthNav, UserNav, Nav } from '../Nav';
// import MobileMenu from '../MobileMenu/MobileMenu';
import Container from '../Container/Container';
import { FooterWrap, FooterCopyRight } from './FooterStyled';

const Footer = () => {
  return (
    <Container>
      <FooterWrap>
        <FooterCopyRight>2022 &copy; Lychman Ievgen </FooterCopyRight>
      </FooterWrap>
    </Container>
  );
};

export default Footer;
