import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from 'glamor';
import { Hero, HeroBody, Container, Title, Subtitle } from 'bloomer';

const logo = css({
  width: '250px',
  display: 'flex',
  alignItems: 'center',
  margin: '30px 0 30px 50px',
});

const logoContainer = css({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const flexLogo = css({
  flex: 1,
});

function Sponsors({ ...props }) {
  const sponsors = props.data.allDatoCmsSponsor.edges;
  const packageUrl = props.data.datoCmsIndexPage.sponsorPackageFile.url;
  return (
    <Hero id="sponsors" isSize="medium">
      <HeroBody>
        <Container>
          <Title>Sponsors</Title>
          <div {...logoContainer}>
            {sponsors.map(sponsor => (
              <div {...logo}>
                <a
                  href={sponsor.node.url}
                  alt={sponsor.node.name}
                  target="_blank"
                  {...flexLogo}
                >
                  <Img sizes={sponsor.node.logo.sizes} />
                </a>
              </div>
            ))}
          </div>
          <Subtitle>
            Sponsorships are available! Download and review our{' '}
            <a href={packageUrl} target="_blank">sponsorship packages</a>{' '}
            and <a href="/contact">contact us</a> to get started.
          </Subtitle>
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
    datoCmsIndexPage: PropTypes.shape({
      sponsorPackageFile: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

Sponsors.propTypes = {};

export default Sponsors;
