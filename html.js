import React from 'react';
import Helmet from 'react-helmet';

import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import { TypographyStyle, GoogleFont } from 'react-typography';
import injectTapEventPlugin from 'react-tap-event-plugin';

import typography from './utils/typography';

injectTapEventPlugin();

const BUILD_TIME = new Date().getTime();

module.exports = React.createClass({
  propTypes() {
    return {
      body: React.PropTypes.string,
    };
  },
  render() {
    const head = Helmet.rewind();

    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!./public/styles.css') //eslint-disable-line
          }}
        />);
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
          <script src={config.gMapsUrl} />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  },
});
