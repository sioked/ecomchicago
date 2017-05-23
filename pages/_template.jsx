import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Headroom from 'react-headroom';
import { MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import '../css/markdown-styles';
import '../css/main';

import typography from '../utils/typography';

const { rhythm } = typography;

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    };
  },
  render() {
    console.log('Children');
    console.log(this.props.children);
    return (
      <MuiThemeProvider theme={getMuiTheme(darkBaseTheme)}>
        <div
          style={{
            position: 'relative',
          }}
        >
          <Headroom
            wrapperStyle={{
              marginBottom: rhythm(1),
              position: 'absolute',
              width: '100%',
              color: '#fff',
              zIndex: 10,
            }}
            style={{
              background: '#fff',
              padding: `4px ${rhythm(3 / 4)} 0px`,
            }}
          >
            <div
              style={{
                padding: `0 ${rhythm(3 / 4)}`,
                maxWidth: '100%',
              }}
            >
              <Link
                to={prefixLink('/')}
                style={{
                  textDecoration: 'none',
                }}
              >
                <img
                  src={prefixLink('/images/logo-text-only.png')}
                  alt="logo"
                  style={{
                    height: '60px',
                    marginBottom: '0px',
                  }}
                />
              </Link>
            </div>
          </Headroom>
          <div
            style={{
              paddingTop: '0',
            }}
          >
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  },
});
