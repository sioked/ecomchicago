import React from 'react';
import Link from 'gatsby-link';
import { Hero, HeroBody, Container, Title, Subtitle } from 'bloomer';
import { css } from 'glamor';

const linkedText = css({
  '& a': {
    'text-decoration': 'underline',
  },
});

const NotFoundPage = () => (
  <div>
    <Hero isColor="info">
      <HeroBody>
        <Container>
          <Title>Uh-oh! There&apos;s nothing here!</Title>
          <Subtitle {...linkedText}>
            You just hit a page that doesn&apos;t exist! Please try navigating
            back to home or <Link to="contact">Contact us</Link> and we&apos;ll
            help you find what you&apos;re looking for.
          </Subtitle>
        </Container>
      </HeroBody>
    </Hero>
  </div>
);

export default NotFoundPage;
