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
    console.log(this.props.data);
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
        <Map />
        <Sponsors sponsors={get(this, 'props.data.allSponsorsJson.edges')} />
        <Speakers speakers={get(this, 'props.data.allSpeakersJson.edges')} />
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
        	title,
          url,
          logo,
          id
      	},
    	},
  	},
    allSpeakersJson {
      edges {
        node {
          name
          bio
          slug
        }
      }
    }
  }
`
