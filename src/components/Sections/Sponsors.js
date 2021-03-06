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
const logoLarge = css({
  width: '450px',
});

const logoContainer = css({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const flexLogo = css({
  flex: 1,
});

function Sponsor({ url, name, sponsorLogo, size }) {
  const sizeClass = size === 'large' ? logoLarge : '';
  return (
    <div {...logo} {...sizeClass}>
      <a
        href={url}
        alt={name}
        target="_blank"
        rel="noopener noreferrer"
        {...flexLogo}
      >
        <Img fluid={sponsorLogo.sizes} />
      </a>
    </div>
  );
}

Sponsor.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string,
  sponsorLogo: PropTypes.shape({
    sizes: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  size: PropTypes.oneOf('large', 'medium'),
};
Sponsor.defaultProps = {
  name: '',
  size: 'medium',
};

function Sponsors({ ...props }) {
  const sponsors = props.data.allDatoCmsSponsor.edges;
  const packageUrl = props.data.datoCmsIndexPage.sponsorPackageFile.url;
  const platinum = sponsors.filter(
    sponsor =>
      sponsor.node.sponsorshiptype &&
      sponsor.node.sponsorshiptype.name === 'Platinum',
  );
  const nonPlatinum = sponsors.filter(
    sponsor =>
      !sponsor.node.sponsorshiptype ||
      sponsor.node.sponsorshiptype.name !== 'Platinum',
  );
  console.log(sponsors);
  return (
    <Hero id="sponsors" isSize="medium">
      <HeroBody>
        <Container>
          <Title>Platinum Sponsors</Title>
          <div {...logoContainer}>
            {platinum.map(sponsor => (
              <Sponsor
                key={sponsor.url}
                {...sponsor.node}
                sponsorLogo={sponsor.node.logo}
                size="large"
              />
            ))}
          </div>
          <hr />
          <Title>Gold, Silver, & Bronze Sponsors</Title>
          <div {...logoContainer}>
            {nonPlatinum.map(sponsor => (
              <Sponsor
                key={sponsor.url}
                {...sponsor.node}
                sponsorLogo={sponsor.node.logo}
              />
            ))}
          </div>
          <Subtitle>
            Sponsorships are available! Download and review our{' '}
            <a href={packageUrl} target="_blank" rel="noopener noreferrer">
              sponsorship packages
            </a>{' '}
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
