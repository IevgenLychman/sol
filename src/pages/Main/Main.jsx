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
  PotentialСustomersTitle,
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
          <PotentialСustomersTitle>Хто наші клієнти?</PotentialСustomersTitle>
          <Diva1>
            <Diva2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                ipsum dicta aspernatur fugiat ipsam laborum odit animi ipsa quam
                nobis, suscipit, dolorem laudantium vero veniam voluptas facere
                cupiditate! Assumenda, odio?
              </p>
            </Diva2>
            <Img src="/images/heroImg.jpg" alt="Корабель" />
          </Diva1>
          <Diva1 className="rev">
            <Diva2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                ipsum dicta aspernatur fugiat ipsam laborum odit animi ipsa quam
                nobis, suscipit, dolorem laudantium vero veniam voluptas facere
                cupiditate! Assumenda, odio?
              </p>
            </Diva2>
            <Img src="/images/heroImg.jpg" alt="Корабель" />
          </Diva1>
        </PotentialСustomers>
      </MainWrap>
    </Container>
  );
};

export default Main;
