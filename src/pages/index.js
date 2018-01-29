import React from 'react';
import Link from 'gatsby-link';
import Splash from '../components/Sections/Splash.js';
import Details from '../components/Sections/Details.js';
import What from '../components/Sections/What.js';
import Footer from '../components/Sections/Footer.js';
import Speakers from '../components/Sections/Speakers.js';

const IndexPage = ({data}) => (
  <div>
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

export default IndexPage;
