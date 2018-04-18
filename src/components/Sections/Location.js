import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import {
  Hero,
  HeroBody,
  Container,
  Columns,
  Column,
  Section,
  Content,
} from 'bloomer';
import Markdown from 'react-markdown';
import ImageResolutions from '../../proptypes/imageResolutions.js';

function Location({ text, title }) {
  const mapUrl =
    'https://api.mapbox.com/v4/mapbox.emerald/pin-s-marker+285A98(-88.0303359,41.9938527)/-87.9503359,41.9938527,11/1280x640@2x.png?access_token=pk.eyJ1Ijoic2lva2VkIiwiYSI6ImNqZzU2cXA3NDJqemkyd3A5eGJzZWMyaXAifQ._SYg4B0ynELnX1AN4ATR5Q';
  const reverse = css({
    '@media(min-width: 769px)': {
      flexDirection: 'row-reverse',
    },
  });

  const darkBackground = css({
    background: 'rgba(0, 0, 0, 0.8)',
  });

  const background = css({
    backgroundImage: `url('${mapUrl}')`,
    backgroundPosition: 'center',
  });

  const mdContent = css({
    '& a': {
      'text-decoration': 'underline',
    },
    '& h1, & h2': {
      color: '#fff',
    },
  });

  return (
    <Hero id="about" isSize="small" isColor="info" {...background}>
      <HeroBody>
        <Container>
          <Columns {...reverse}>
            <Column isSize={4} {...darkBackground}>
              <Section>
                <Content>
                  <Markdown source={text} className={mdContent} />
                </Content>
              </Section>
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>
  );
}

Location.defaultProps = {
  text: '',
  title: '',
};

Location.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.shape({
    sizes: ImageResolutions,
  }).isRequired,
};

export default Location;
