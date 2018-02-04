import React from 'react';
import { css } from 'glamor';
import {
  Hero,
  HeroBody,
  Container,
  Columns,
  Column,
  Title,
  Image,
  Box,
  Section,
} from 'bloomer';
import content from '../../constants/content';
import photo from '../Images/section-photo-1.jpg';
import cubesTexture from '../Images/cubes.png';

function Details() {
  const reverse = css({
    '@media(min-width: 769px)': {
      'flex-direction': 'row-reverse',
    },
  });

  const darkTitle = css({
    color: '#4A4A4A !important',
  });
  return (
    <Hero
      id="about"
      isSize="medium"
      isColor="info"
      style={{
        backgroundImage:
        `url(${cubesTexture}})`,
      }}
    >
      <HeroBody>
        <Container hasTextAlign="centered">
          <Columns {...reverse} isVCentered>
            <Column isSize={8}>
              <Title hasTextAlign="centered">
                A 3-Day Ecommerce Conference for Online Entrepreneurs and Store
                Owners
              </Title>
              <Section>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Section>
              <Section hasTextAlign="centered">
                <Columns isCentered>
                  <Column isSize={6}>
                    <Box>
                      <Title {...darkTitle} isSize={4} className={darkTitle}>
                        Date:
                      </Title>
                      <p>{content.date}</p>
                    </Box>
                  </Column>
                  <Column isSize={6}>
                    <Box>
                      <Title {...darkTitle} isSize={4} className={darkTitle}>
                        Location:
                      </Title>
                      <p>Elk Grove Village, IL</p>
                    </Box>
                  </Column>
                </Columns>
              </Section>
            </Column>
            <Column isSize={4}>
              <Image src={photo} alt="The conference hosts" />
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>
  );
}

Details.defaultProps = {};

Details.propTypes = {};

export default Details;
