// import React, { useState } from 'react';
// import Logo from '../Logo/Logo';
// import { AuthNav, UserNav, Nav } from '../Nav';
// import MobileMenu from '../MobileMenu/MobileMenu';
import Container from 'components/Container/Container';
import TileList from 'components/TileList/TileList';

import {
  MainWrap,
  Hero,
  HeroTitle,
  HeroSubtitle,
  Services,
  ServicesTitle,
  PotentialСustomers,
  Diva1,
  Diva2,
  Img,
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
          <TileList />
        </Services>
        <PotentialСustomers>
          <Diva2>
            <p>kjsdjkfhkilsfkildjhskj</p>
          </Diva2>
          <Img src="/images/heroImg.jpg" alt="Корабель" />
        </PotentialСustomers>
      </MainWrap>
    </Container>
  );
};

export default Main;
