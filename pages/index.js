import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { config } from 'config';
import Cookies from 'js-cookie';
import 'whatwg-fetch';
import './index.scss';


export default class Index extends React.Component {
	constructor(props) {
		super(props);
		const isSubmitted = Cookies.get('submitted');

		this.state = {
			input: '',
			isSubmitted,
		};
		this._emailSubmitted = this._emailSubmitted.bind(this);
		this._submitEmail = this._submitEmail.bind(this);
	}

	_emailSubmitted () {
		Cookies.set('submitted', true);
	}

	_submitEmail () {
		const url = config.emailUrl;
		const email = this.state.input;
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				value1: email
			}),
		}).then(() => this._emailSubmitted())
		.catch(()=> this._emailSubmitted());
	}

  render () {
    return (<div id="main">
      <Helmet
        title={config.siteTitle}
        meta={[
          {"name": "description", "content": "Sample"},
          {"name": "keywords", "content": "sample, something"},
        ]}
      />
    <div id="primary-banner" className="section" style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${prefixLink('/images/banner-bw.jpg')})`,
      }}>
        <h1 >
          <img src={prefixLink('/images/logo-light-on-dark.png')} />
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
        <div className="container image-section-container">
          <div className="section-image">
            <img
              className="photo-1"
              src={prefixLink('/images/section-photo-1.jpg')}
            />
          </div>
          <div className="content-container">
            <div className="detail-row header-section">
              <h2>A 2-day Conference for Online Store Owners and Marketplace Sellers of All Levels!</h2>
              <p>Stay tuned and mark your calendars for eCom Chicago 2017. It's guaranteed to be 2 jam-packed days of learning that you can use to start, grow, or streamline your online business.</p>
            </div>

            <div className="detail-row">
              <div className="callout">
                <h3>
                  <a href="https://www.entrepreneur.com/article/288833" target="_blank">Recently Highlighted in Entrepreneur Magazine!</a>
                </h3>
              </div>
            </div>
            <div className="detail-row header-section">
              <p>Partnering with the <a href="http://www.heartofamarine.org/">Heart of a Marine Foundation</a> to support veterans of all branches of the United States Armed Forces.</p>
            </div>
						<div className="detail-row detail-row-flex">
							<div className="detail-section">
								<h2>Date:</h2>
								<p>October 20th to October 21st, 2017</p>
							</div>
							<div className="detail-section">
								<h2>Location:</h2>
								<p>Belvedere Banquets and Events
									<br/>
									1170 W. Devon Ave.
									<br/>
									Elk Grove Village, IL 60007
								</p>
							</div>
						</div>
 					</div>

        </div>

				{ this.props.isRegistrationEnabled &&
        <div className="detail-row">
          <div className="signup">
            <h2>Get notified when registrations open!</h2>
            <TextField
              hintText="Email Address"
      				onChange={(event) => this.setState({input: event.target.value})}
      				value={this.state.input}
              />
            <RaisedButton primary label="Notify me!" onClick={this._submitEmail}></RaisedButton>
          </div>
        </div>
        }

      </div>
      <div id="section3" className="section">
        <div className="container image-section-container">
          <div className="section-image">
            <img
              className="photo-2"
              src={prefixLink('/images/section-photo-2.jpg')}
            />
          </div>
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

    </div>
    )
  }
}
