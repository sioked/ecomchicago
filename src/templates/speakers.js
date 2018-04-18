import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { css, after } from 'glamor';
import { Container, Content, Title, Hero, HeroBody, Subtitle } from 'bloomer';
import Markdown from 'react-markdown';
import MdLink from '../components/MdLink';
import RegistrationButton from '../components/Buttons/Registration.js';

const profile = css({
  display: 'inline-block',
  margin: '0 3rem 0 0',
  float: 'left',
});
const clearFloat = css(
  after({
    content: ' ',
    display: 'table',
    clear: 'both',
  }),
);

const mdContent = css({
  '& a': {
    'text-decoration': 'underline',
  },
});

function SpeakerTemplate(props) {
  const speaker = props.data.datoCmsSpeaker;
  return (
    <Hero isSize="medium" isColor="info" className="is-bold">
      <HeroBody>
        <Container>
          <Title>{speaker.name}</Title>
          <Subtitle>{speaker.title}</Subtitle>
          <Content {...clearFloat}>
            <Img
              className={`${profile} bio-image`}
              alt={speaker.name}
              resolutions={speaker.photo.resolutions}
              {...profile}
            />
            <Markdown
              source={speaker.blurb}
              {...mdContent}
              renderers={{
                link: MdLink,
              }}
              className={mdContent}
            />
          </Content>
          <RegistrationButton />
          <br />
          <Link to="/">&#8678; Go Back</Link>
        </Container>
      </HeroBody>
    </Hero>
  );
}
SpeakerTemplate.propTypes = {
  data: PropTypes.shape({
    datoCmsSpeaker: PropTypes.shape({
      name: PropTypes.string,
      blurb: PropTypes.string,
      photo: PropTypes.shape({
        resolutions: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};

export default SpeakerTemplate;

export const pageQuery = graphql`
  query SpeakerByPath($slug: String!) {
    datoCmsSpeaker(slug: { eq: $slug }) {
      name
      slug
      title
      blurb
      photo {
        id
        resolutions(
          width: 250
          height: 250
          imgixParams: {
            fit: "facearea"
            faceindex: 1
            facepad: 2
            w: "250"
            h: "250"
            auto: "compress"
          }
        ) {
          width
          height
          src
          srcSet
        }
      }
    }
  }
`;
