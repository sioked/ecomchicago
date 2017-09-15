import React from 'react';
import DetailLinks from '../sections/DetailLinks';
import './info.scss';

function SpeakerTemplate(props) {
  const speaker = props.data.markdownRemark;
  return (
    <div className="content-page">
      <div className="info-container">
        <h1>{speaker.frontmatter.name}</h1>
        <img
          className="bio-image"
          src={speaker.frontmatter.image}
          alt={speaker.frontmatter.name}
        />
        <div dangerouslySetInnerHTML={{ __html: speaker.html }} />
        <DetailLinks />
      </div>
    </div>
  );
}

export default SpeakerTemplate;

export const pageQuery = graphql`
  query SpeakerByPath($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }}) {
      id
      html
      frontmatter {
        name
        image
      }
    }
  }
`
