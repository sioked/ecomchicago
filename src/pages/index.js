import React from 'react';
import Helmet from 'react-helmet';
import { get } from 'lodash';
import 'whatwg-fetch';

import Splash from '../sections/Splash';
import Details from '../sections/Details';
import WhatToLearn from '../sections/Whattolearn';
import Map from '../sections/Map';
import Sponsors from '../sections/Sponsors';
import Speakers from '../sections/Speakers';

import './index.scss';


export default class Index extends React.Component {

  render() {
    return (
      <div id="main">
        <Helmet
          title={get(this, 'props.data.site.siteMetadata.title')}
          meta={[
            { name: 'description', content: 'EcomChicago 2017 - The Midwest\'s best Ecom Conference' },
            { name: 'keywords', content: 'ecom,ecommerce,conference,amazon,ebay,education,store,marketplace,entrepreneur' },
          ]}
        >
          <script src={get(this, 'props.data.site.siteMetadata.title')} />
        </Helmet>
        <Splash />
        <Details />
        <WhatToLearn />
        <Speakers speakers={get(this, 'props.data.allMarkdownRemark.edges')} />
        <Sponsors sponsors={get(this, 'props.data.allSponsorsJson.edges')} />
        <Map />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title,
        gMapsUrl,
      }
    },
    allSponsorsJson {
    edges {
        node {
          title
          url
          logo
          id
        },
      },
    },
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          },
          frontmatter {
            name
            path
            image
          }
        }
      }
    }
  }
`
