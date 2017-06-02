/* eslint-disable class-methods-use-this */
import React from 'react';
// import { Link } from 'react-router';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import { MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import config from '../../gatsby-config';

import '../css/main.scss';
import './layout.scss';

import typography from '../utils/typography';

import logo from '../pages/images/logo-text-only.png';

const { rhythm } = typography;

export default function Layout(props) {
  console.log(props);
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
          className="header"
        >
          <div
            style={{
              padding: `0 ${rhythm(3 / 4)}`,
              maxWidth: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Link
              to={'/'}
              style={{
                textDecoration: 'none',
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{
                  height: '60px',
                  marginBottom: '0px',
                }}
              />
            </Link>
            <div className="button-container">
              <a
                className="button"
                href={config.siteMetadata.registrationUrl}
              >
                Register Now
              </a>
            </div>
          </div>
        </Headroom>
        <div
          style={{
            paddingTop: '0',
          }}
        >
          {props.children()}
        </div>
      </div>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: React.PropTypes.any,
};
