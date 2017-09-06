import React from 'react';
import { get } from 'lodash';
import './info.scss';

function InfoTemplate(props) {
  const content = props.data.markdownRemark;
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  return (
    <div className="content-page">
      <div className="info-container">
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </div>
    </div>
  );
}

export default InfoTemplate;

export const pageQuery = graphql`
  query InfoByPath($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }}) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
