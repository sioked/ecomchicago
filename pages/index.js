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
      <div id="primary-banner" className="section">
        <h1 >
          <img src="/images/logo-light-on-dark.png" />
        </h1>
        <div className="ribbon-container">
          <div className="ribbon">
            <div className="ribbon-content">
              <h2>
                October 20-21, 2017
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div id="details" className="section">
        <div className="detail-row">
          <div className="detail-section">
            <h2>Date:</h2>
            <p>October 20th to October 21st, 2017</p>
          </div>
          <div className="detail-section">
            <h2>Location:</h2>
            <p>Belvedere Banquets and Events
              <br/>
              1170 W. Devon Ave.
              Elk Grove Village, IL 60007
            </p>
          </div>
        </div>

        <div className="callout">
          <h3>
            <a href="" target="_blank">Recently named one of Entrepreneur Magazine's Top 10 Marketing Conferences!</a>
          </h3>
        </div>

        <div className="signup">
          <h2>Notify me when registrations open!</h2>
          <input type="text"></input>
          <button>Sign Up</button>
        </div>
      </div>
      <div id="section3" className="section">
        <h2 >
          2 Full Days packed with <em>great</em> information you can use to <em>start, grow,</em> or <em>streamline</em> your business.
        </h2>
        <div className="box-container">
          <div className="box">
            <h2>Accomplished Speakers</h2>
            <p>You’ll hear from speakers with proven track records and having real-world case studies.We have pros from the e-commerce world who have grown world class businesses.</p>
          </div>
          <div className="box">
            <h2>Top-Notch Attendees</h2>
            <p>Attendees will range from those operating million dollar e-commerce businesses to those just getting started. The wealth of experience, knowledge and enthusiasm will be mind blowing. Whether you are a savvy eCommerce professional or an eCommerce “newbie” you will have the opportunity to share your best tips and tricks, challenges and successes and learn from each other as well as from the professional speakers and sponsors.</p>
          </div>
        </div>
      </div>

    </div>
    )
  }
}
