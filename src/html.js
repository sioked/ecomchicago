import React, { Component } from 'react';
import { get } from 'lodash';
import Helmet from 'react-helmet';

import { TypographyStyle, GoogleFont } from 'react-typography';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Analytics from './analytics';
import typography from './utils/typography';

injectTapEventPlugin();

const BUILD_TIME = new Date().getTime();
const gMapsUrl = 'https://www.google.com/maps/api/js?key=AIzaSyCS1j9k6FEHLsXt5T_xyUWTJ6hqM3FTVyU';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e);
  }
}

export default class Html extends Component {

  render() {
    const head = Helmet.rewind();
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script src="https://www.google.com/maps/api/js?key=AIzaSyCS1j9k6FEHLsXt5T_xyUWTJ6hqM3FTVyU" />
          <Analytics trackingId='UA-98179763-1' />
          {this.props.headComponents}
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
