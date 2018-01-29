import React from 'react';
import PropTypes from 'prop-types';
import { Hero, HeroBody, Container, Title } from 'bloomer';
import Img from 'gatsby-image';

function Speakers({ data }) {
  return (
    data.allContentfulSpeaker &&
    data.allContentfulSpeaker.edges && (
      <Hero isSize="medium" isColor="primary">
        <HeroBody>
          <Container hasTextAlign="centered">
            <Title>Speakers</Title>
            {data.allContentfulSpeaker.edges.map(edge => (
              <a href={`/speakers/${edge.node.slug}`}>
                <div>{edge.node.name}</div>
                <div>{edge.node.title}</div>
                <Img resolutions={edge.node.photo.resolutions} />
              </a>
            ))}
          </Container>
        </HeroBody>
      </Hero>
    )
  );
}

Speakers.defaultProps = {};

Speakers.propTypes = {
  data: PropTypes.shape({
    allContentfulSpeaker: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string,
          }),
        }),
      ),
    }),
  }),
};

export default Speakers;
