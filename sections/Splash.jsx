import React, { PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';


function Splash(props) {
  return (
    <div
      id="primary-banner" className="section" style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${prefixLink('/images/banner-bw.jpg')})`,
      }}
    >
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
  );
}

export default Splash;
