import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import 'whatwg-fetch';

import Splash from '../sections/Splash';
import Details from '../sections/Details';
import WhatToLearn from '../sections/Whattolearn';
import Map from '../sections/Map';
import Sponsors from '../sections/Sponsors';

import './index.scss';


export default class Index extends React.Component {

  render() {
    return (
      <div id="main">
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: 'EcomChicago 2017 - The Midwest\'s best Ecom Conference' },
            { name: 'keywords', content: 'ecom,ecommerce,conference,amazon,ebay,education,store,marketplace,entrepreneur' },
          ]}
        />
        <Splash />
        <Details />
        <WhatToLearn />
        <Map />
        <Sponsors />
      </div>
    );
  }
}
