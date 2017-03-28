import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import { config } from 'config'
import '../css/markdown-styles'
import '../css/main';

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
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
          }}
          style={{
            background: '#fff',
            padding: `4px ${rhythm(3/4)} 0px`,
          }}
        >
          <div
            style={{
              padding: `0 ${rhythm(3/4)}`,
              maxWidth: '100%',
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                textDecoration: 'none',
              }}
            >
              <img src="/images/logo-text-only.png" alt="logo" style={{
                  height: '60px',
                  marginBottom: '0px',
                }}
              />
            </Link>
          </div>
        </Headroom>
        <div
          style={{
            paddingTop: `0`
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  },
})
