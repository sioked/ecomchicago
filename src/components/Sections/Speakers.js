import React from 'react';
import PropTypes from 'prop-types';
import { Hero, HeroBody, Container, Title, Image, Content } from 'bloomer';
import Img from 'gatsby-image';
import { css } from 'glamor';
import Podium from '../Images/podium.svg';
import linenTexture from '../Images/low-contrast-linen.png';

function Speakers({ data }) {
  return (
    data.allDatoCmsSpeaker &&
    data.allDatoCmsSpeaker.edges && (
      <Hero
        isSize="medium"
        isColor="primary"
        style={{
          backgroundImage: `url(${linenTexture})`,
        }}
        id="speakers"
      >
        <HeroBody>
          <Container hasTextAlign="centered">
            <Title>Speakers</Title>
            {!data.allDatoCmsSpeaker.edges.length ||
            process.env.GATSBY_SPEAKERS_DISABLED ? (
              <EmptySpeaker />
            ) : (
              <AllSpeakers edges={data.allDatoCmsSpeaker.edges} />
            )}
          </Container>
        </HeroBody>
      </Hero>
    )
  );
}

function AllSpeakers({ edges: speakers }) {
  return (
    <div>
      {speakers.map(speaker => (
        <a href={`/speakers/${speaker.node.slug}`}>
          <div>{speaker.node.name}</div>
          <div>{speaker.node.title}</div>
          <Img resolutions={speaker.node.photo.resolutions} />
        </a>
      ))}
    </div>
  );
}
AllSpeakers.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        slug: PropTypes.string,
        photo: PropTypes.object,
      }),
    }),
  ),
};
AllSpeakers.defaultProps = {
  edges: [],
};

const link = css({
  textDecoration: 'underline',
});
function EmptySpeaker() {
  return (
    <div>
      <Image
        src={Podium}
        style={{
          width: '300px',
          margin: '0 auto',
        }}
      />
      <Title isSize={3}>Stay Tuned!</Title>
      <Content isSize={4}>
        We&#39;re working to put together an informative and entertaining group
        of speakers. If you&#39;re interested in speaking, please{' '}
        <a {...link} href="/contact">
          contact us
        </a>.
      </Content>
    </div>
  );
}

Speakers.defaultProps = {};

Speakers.propTypes = {
  data: PropTypes.shape({
    allDatoCmsSpeaker: PropTypes.shape({
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
