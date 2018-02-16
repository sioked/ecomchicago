import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Splash from '../components/Sections/Splash.js';
import Details from '../components/Sections/Details.js';
import What from '../components/Sections/What.js';
import Speakers from '../components/Sections/Speakers.js';
import content from '../constants/content.js';
import SplashImageType from '../proptypes/splashImage.js';
import ImageResolutions from '../proptypes/imageResolutions.js';

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
      seo={data.datoCmsIndexPage.seoMetaTags}
      favicon={data.datoCmsSite.faviconMetaTags}
    />
    {/*  */}
    <Splash splashImage={data.datoCmsIndexPage.splashImage} />
    <Details
      title={data.datoCmsIndexPage.detailsTitle}
      text={data.datoCmsIndexPage.detailsText}
      image={data.datoCmsIndexPage.detailsImage}
    />
    <What
      image={data.datoCmsIndexPage.whatImage}
      content={data.datoCmsIndexPage.whatData}
    />
    <Speakers data={data} />
  </div>
);

export const query = graphql`
  query indexQuery {
    allDatoCmsSpeaker(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          name
          slug
          title
          blurb
          photo {
            id
            resolutions(
              width: 200
              height: 200
              imgixParams: {
                fit: "facearea"
                faceindex: 1
                facepad: 2
                w: "200"
                h: "200"
                fm: "jpg"
                auto: "compress"
              }
            ) {
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
    datoCmsIndexPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      splashImage {
        resize(width: 1200, imgixParams: { blur: 5, auto: "compress" }) {
          src
        }
      }
      detailsText
      detailsTitle
      detailsImage {
        sizes(maxWidth: 370, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      whatImage {
        sizes(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      whatData {
        id
        title
        text
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
            blurb: PropTypes.string,
            photo: PropTypes.shape({
              title: PropTypes.string,
              resolutions: ImageResolutions,
            }),
          }),
        }),
      ),
    }).isRequired,
    datoCmsIndexPage: PropTypes.shape({
      seoMetaTags: PropTypes.shape({
        tags: PropTypes.arrayOf(
          PropTypes.shape({
            tagName: PropTypes.string,
            content: PropTypes.string,
          }),
        ),
      }),
      detailsText: PropTypes.string,
      splashImage: SplashImageType.isRequired,
      detailsImage: PropTypes.shape({
        resolutions: ImageResolutions,
      }),
      whatImage: PropTypes.shape({
        sizes: ImageResolutions,
      }),
      whatData: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          text: PropTypes.string,
        }),
      ),
    }),
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
