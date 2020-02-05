import React from 'react';
import PropTypes from 'prop-types';
import {
  Hero,
  HeroBody,
  Container,
  Notification,
  Columns,
  Column,
  Title,
} from 'bloomer';
import Img from 'gatsby-image';
import Markdown from 'react-markdown';
import ImageResolutions from '../../proptypes/imageResolutions.js';

function What({ image, content }) {
  return (
    <Hero isSize="medium">
      <HeroBody>
        <Container>
          <Columns isVCentered>
            <Column isSize={6}>
              {content.map(contentItem => (
                <Notification isColor="primary">
                  <Title>{contentItem.title}</Title>
                  <Markdown source={contentItem.text} />
                </Notification>
              ))}
            </Column>
            <Column isSize={6}>
              <Img fluid={image.sizes} />
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>
  );
}

What.defaultProps = {};

What.propTypes = {
  image: PropTypes.shape({
    resolutions: ImageResolutions,
  }).isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default What;
