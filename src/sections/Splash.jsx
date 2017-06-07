import React from 'react';
import bg from '../pages/images/banner-bw.jpg';
import logoLightOnDark from '../pages/images/logo-light-on-dark.png';


function Splash() {
  return (
    <div
      id="primary-banner"
      className="section"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${bg})`,
      }}
    >
      <h1 >
        <img src={logoLightOnDark} alt="logo" />
      </h1>
      <div className="ribbon-container">
        <div className="ribbon">
          <div className="ribbon-content">
            <h2>
              October 19-21, 2017
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
