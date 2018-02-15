import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
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
    {/*  */}
    <Splash />
    <Details />
    <What />
    <Speakers data={data} />
  </div>
);

export const query = graphql`
  query speakersQuery {
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
