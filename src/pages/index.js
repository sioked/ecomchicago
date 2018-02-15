import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Splash from '../components/Sections/Splash.js';
import Details from '../components/Sections/Details.js';
import What from '../components/Sections/What.js';
import Speakers from '../components/Sections/Speakers.js';
import content from '../constants/content.js';

const IndexPage = ({ data }) => (
  <div>
    <Helmet
      title={content.siteTitle}
      meta={[
        {
          name: 'attribution',
          content:
            'Background patterns from Subtle Patterns (https://www.toptal.com/designers/subtlepatterns)',
        },
      ]}
    />
    <HelmetDatoCms
      seo={data.datoCmsIndexpage.seoMetaTags}
      favicon={data.datoCmsSite.faviconMetaTags}
    />
    {/*  */}
    <Splash />
    <Details />
    <What />
    <Speakers data={data} />
  </div>
);

export const query = graphql`
  query indexQuery {
    allDatoCmsSpeaker {
      edges {
        node {
          id
          name
          slug
          title
          blurb
          photo {
            id
            resolutions(width: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsResolutions
            }
          }
        }
      }
    }
    datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    datoCmsIndexpage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allDatoCmsSpeaker: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            slug: PropTypes.string,
            title: PropTypes.string,
            blurb: PropTypes.shape({
              blurb: PropTypes.string,
            }),
            photo: PropTypes.shape({
              title: PropTypes.string,
              resolutions: PropTypes.shape({
                width: PropTypes.number,
                height: PropTypes.number,
                src: PropTypes.string,
                srcSet: PropTypes.arrayOf(PropTypes.string),
              }),
            }),
          }),
        }),
      ),
    }).isRequired,
    datoCmsIndexpage: PropTypes.shape({
      seoMetaTags: PropTypes.shape({
        tags: PropTypes.arrayOf(
          PropTypes.shape({
            tagName: PropTypes.string,
            content: PropTypes.string,
          }),
        ),
      }),
    }).isRequired,
    datoCmsSite: PropTypes.shape({
      faviconMetaTags: PropTypes.shape({
        tags: PropTypes.arrayOf(
          PropTypes.shape({
            tagName: PropTypes.string,
            attributes: PropTypes.arrayOf(
              PropTypes.shape({
                rel: PropTypes.string,
                sizes: PropTypes.string,
                href: PropTypes.string,
              }),
            ),
          }),
        ),
      }),
    }).isRequired,
  }).isRequired,
};
export default IndexPage;
