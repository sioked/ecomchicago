import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { config } from 'config';
import Cookies from 'js-cookie';

import Splash from '../sections/Splash';
import Details from '../sections/Details';
import WhatToLearn from '../sections/whattolearn';
import Map from '../sections/map';

import 'whatwg-fetch';
import './index.scss';


export default class Index extends React.Component {
	constructor(props) {
		super(props);
	}

  render () {
    return (
			<div id="main">
	      <Helmet
	        title={config.siteTitle}
	        meta={[
	          {"name": "description", "content": "EcomChicago 2017 - The Midwest's best Ecom Conference"},
	          {"name": "keywords", "content": "ecom,ecommerce,conference,amazon,ebay,education,store,marketplace,entrepreneur"},
	        ]}
	      />
				<Splash />
	      <Details />
				<WhatToLearn />
				<Map />
    </div>
    )
  }
}
