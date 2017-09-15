import React from 'react';
import { get } from 'lodash';
import DetailLinks from '../sections/DetailLinks';
import './info.scss';

function InfoTemplate(props) {
  const content = get(props, 'data.markdownRemark');
  return (
    <div className="content-page">
      <div className="info-container">
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
        <DetailLinks />
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
