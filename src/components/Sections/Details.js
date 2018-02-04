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
      flexDirection: 'row-reverse',
    },
  });

  const darkTitle = css({
    color: '#4A4A4A !important',
  });

  const background = css({
    backgroundImage: `url(${cubesTexture})`,
  });

  return (
    <Hero id="about" isSize="medium" isColor="info" {...background}>
      <HeroBody>
        <Container hasTextAlign="centered">
          <Columns {...reverse} isVCentered>
            <Column isSize={8}>
              <Title hasTextAlign="centered">
                A 3-Day Ecommerce Conference for Online Entrepreneurs and Store
                Owners
              </Title>
              <Section>
                Whether you sell on eBay, Amazon Marketplace, or your own
                eCommerce website, ecomChicago is the midwest&#39;s best
                eCommerce conference for you! There will be 3 jam-packed days of
                vendor demos, speakers, and learning that you can use to
                jump-start, grow, or streamline your online business.
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
