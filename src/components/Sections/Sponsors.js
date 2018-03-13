import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css, after } from 'glamor';
import { Hero, HeroBody, Container, Title } from 'bloomer';

const logo = css({
  width: '250px',
});

const logoContainer = css({
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
});

const clearFix = css(
  after({
    content: ' ',
    display: 'table',
    clear: 'both',
  }),
);

function Sponsors({ ...props }) {
  const sponsors = props.data.allDatoCmsSponsor.edges;
  return (
    <Hero>
      <HeroBody>
        <Container>
          <Title>Sponsors</Title>
          <div {...logoContainer}>
            {sponsors.map(sponsor => (
              <div {...css(logo, clearFix)}>
                <a
                  href={sponsor.node.url}
                  alt={sponsor.node.name}
                  target="_new"
                >
                  <Img sizes={sponsor.node.logo.sizes} />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </HeroBody>
    </Hero>
  );
}

Sponsors.propTypes = {
  data: PropTypes.shape({
    allDatoCmsSponsor: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            url: PropTypes.string,
            name: PropTypes.string,
            logo: PropTypes.object,
          }),
        }),
      ),
    }),
  }).isRequired,
};

Sponsors.propTypes = {};

export default Sponsors;
