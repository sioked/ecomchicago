import React from 'react';
import Img from 'gatsby-image';
import { Container, Section, Title } from 'bloomer';
import Markdown from 'react-markdown';

function SpeakerTemplate(props) {
  const speaker = props.data.contentfulSpeaker;
  return (
    <Section>
      <Container>
        <Title>{speaker.name}</Title>
        <Img
          className="bio-image"
          alt={speaker.name}
          resolutions={speaker.photo.resolutions}
        />
        <Markdown source={speaker.blurb.blurb}/>
      </Container>
    </Section>
  );
}

export default SpeakerTemplate;

export const pageQuery = graphql`
  query SpeakerByPath($slug: String!) {
    contentfulSpeaker(slug: {eq: $slug}) {
      name
      slug
      title
      blurb {
        id
        blurb
      }
      photo {
        id
        title
        resolutions(width: 250) {
          width
          height
          src
          srcSet
        }
      }
    }
  }
`;
