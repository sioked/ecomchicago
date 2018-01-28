import React from 'react';
import Link from 'gatsby-link';
import {Hero, HeroBody, Container, Image} from 'bloomer';
import Ribbon from '../Ribbon';
import bg from '../Images/banner-bw.jpg';
import logoLight from '../Images/logo-light-on-dark.png';

const Splash = () => (
  <Hero
    isSize="medium"
    style={{
      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${bg})`,
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}>
    <HeroBody>
      <Container hasTextAlign="center">
        <Image
          src={logoLight}
          alt="ecomChicago 2018"
          style={{
            maxWidth: '400px',
            margin: '0 auto',
          }}
        />
        <Ribbon>Date 2018</Ribbon>
      </Container>
    </HeroBody>
  </Hero>
);

export default Splash;
