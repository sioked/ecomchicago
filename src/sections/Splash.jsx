import React from 'react';
import moment from 'moment';
import bg from '../pages/images/banner-bw.jpg';
import logoLightOnDark from '../pages/images/logo-light-on-dark.png';
import config from '../../gatsby-config';


function Splash() {
  return (
    <div
      id="primary-banner"
      className="section"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${bg})`,
      }}
    >
      <div className="logo-container">
        <img src={logoLightOnDark} alt="logo" />
      </div>
      <h3 className="tagline">Innovate, Inspire, and Grow</h3>
      <div className="ribbon-container">
        <div className="ribbon">
          <div className="ribbon-content">
            <h2>
              October 19-21, 2017
            </h2>
          </div>
        </div>
      </div>
      { moment().isBefore(moment('2017-08-01')) &&
        <div>
          <p className="registration-details">Early-bird registration is now available! Use Promo Code EARLYBIRD to save $40!</p>
          <div className="button-container">
            <a
              className="button"
              href={config.siteMetadata.registrationUrl}
            >
              Register Now
            </a>
          </div>
        </div>
      }
    </div>
  );
}

export default Splash;
