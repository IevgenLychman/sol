// import React, { useState } from 'react';
// import Logo from '../Logo/Logo';
// import { AuthNav, UserNav, Nav } from '../Nav';
// import MobileMenu from '../MobileMenu/MobileMenu';
import Container from 'components/Container/Container';
import {
  MainWrap,
  Hero,
  HeroTitle,
  HeroSubtitle,
  Services,
  ServicesTitle,
  ServicesList,
  ServicesItems,
} from './MainStyled';

const Main = () => {
  return (
    <Container>
      <MainWrap>
        <Hero>
          <HeroTitle>ШВИДКО ТА ПРОФЕСІЙНО</HeroTitle>
          <HeroSubtitle>
            Повний спектр послуг з митного оформлення юридичних та фізичних осіб
          </HeroSubtitle>
        </Hero>
        <Services>
          <ServicesTitle>Послуги</ServicesTitle>
          <ServicesList />
        </Services>
      </MainWrap>
    </Container>
  );
};

export default Main;
