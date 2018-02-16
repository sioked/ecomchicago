import React from 'react';
import PropTypes from 'prop-types';
import {
  Hero,
  HeroBody,
  Container,
  Subtitle,
  Title,
  Image,
  Content,
} from 'bloomer';
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
          <Container>
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

const image = css({
  borderRadius: '50%',
  backgroundColor: '#fff',
  ':hover img:nth-of-type(2)': {
    opacity: '0.7!important',
  },
});
const containerStyle = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'space-between',
  justifyContent: 'center',
});
const speakerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '290px',
});
function AllSpeakers({ edges: speakers }) {
  return (
    <Container {...containerStyle}>
      <Title>Speakers</Title>
      {speakers.map(speaker => (
        <a href={`/speakers/${speaker.node.slug}`} {...speakerStyle}>
          <Img resolutions={speaker.node.photo.resolutions} className={image} />
          <Title isSize={4}>{speaker.node.name}</Title>
          <Subtitle isSize={5}>{speaker.node.title}</Subtitle>
        </a>
      ))}
    </Container>
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
    <Container hasTextAlign="centered">
      <Title>Speakers</Title>
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
    </Container>
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
