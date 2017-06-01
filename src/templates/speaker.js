import React, { PropTypes } from 'react';
import { get } from 'lodash';

function SpeakerTemplate(props) {
  const speaker = props.data.markdownRemark;
  const title = get(props, 'data.site.siteMetadata.title');
  return (
    <div>
      {speaker.frontmatter.name}
      <div dangerouslySetInnerHTML={{ __html: speaker.html }} />
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
      }
    }
  }
`
