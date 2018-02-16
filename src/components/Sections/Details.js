import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import {
  Hero,
  HeroBody,
  Container,
  Columns,
  Column,
  Title,
  Box,
  Section,
  Content,
} from 'bloomer';
import Markdown from 'react-markdown';
import Img from 'gatsby-image';
import content from '../../constants/content';
import ImageResolutions from '../../proptypes/imageResolutions.js';
import cubesTexture from '../Images/cubes.png';

function Details({ text, title, image }) {
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
              <Title hasTextAlign="centered">{title}</Title>
              <Section>
                <Content>
                  <Markdown source={text} />
                </Content>
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
              <Img sizes={image.sizes} />
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>
  );
}

Details.defaultProps = {
  text: '',
  title: '',
};

Details.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.shape({
    sizes: ImageResolutions,
  }).isRequired,
};

export default Details;
