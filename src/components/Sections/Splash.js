import React from 'react';
import { Hero, HeroBody, Container, Image, Title, Subtitle } from 'bloomer';
import Ribbon from '../Ribbon';
import RegistrationButton from '../Buttons/Registration';
import content from '../../constants/content';
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
    }}
  >
    <HeroBody>
      <Container hasTextAlign="centered">
        <Image
          src={logoLight}
          alt="ecomChicago 2018"
          style={{
            maxWidth: '400px',
            margin: '0 auto',
          }}
        />
        <Title
          isSize={4}
          style={{
            color: '#fff',
          }}
          isSpaced
        >
          2018
        </Title>
        <Subtitle
          isSize={4}
          hasTextColor="primary"
          isSpaced
          style={{
            fontFamily: 'Playball, cursive',
            fontSize: '1.7rem',
          }}
        >
          Innovate, Inspire, and Grow
        </Subtitle>
        <Ribbon>{content.date}</Ribbon>
        <RegistrationButton />
      </Container>
    </HeroBody>
  </Hero>
);

export default Splash;
