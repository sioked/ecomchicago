import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Splash from '../components/Sections/Splash.js';
import Details from '../components/Sections/Details.js';
import What from '../components/Sections/What.js';
import Footer from '../components/Sections/Footer.js';
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
    {/*  */}
    <Splash />
    <Details />
    <What />
    <Speakers data={data} />
    <Footer />
  </div>
);

export const query = graphql`
  query speakersQuery {
    allContentfulSpeaker {
      edges {
        node {
          id
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
            resolutions(width: 200) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulSpeaker: PropTypes.shape({
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
    }),
  }).isRequired,
};
export default IndexPage;
