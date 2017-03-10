import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import './index.scss';

export default class Index extends React.Component {
  render () {
    return (<div id="main">
      <Helmet
        title={config.siteTitle}
        meta={[
          {"name": "description", "content": "Sample"},
          {"name": "keywords", "content": "sample, something"},
        ]}
      />
      <div id="primary-banner">
        <h1 >
          {config.siteTitle}
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <Link to="#section2">Learn More</Link>
      </div>
      <div id="section2">
        <h1 >
          {config.siteTitle}
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>

    </div>
    )
  }
}
