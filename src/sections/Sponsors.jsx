/* global process */
/* eslint-disable no-underscore-dangle */

import React, { PropTypes } from 'react';

function Sponsor(sponsor) {
  return (
    <a className="sponsor" href={sponsor.url}>
      <div className="sponsor-image-container">
        <img src={sponsor.logo} alt={sponsor.title} />
      </div>
      <h3>{sponsor.title}</h3>
    </a>
  );
}

function Sponsors(props) {
  console.log(props);
  return (
    <div id="sponsors" className="section">
      <div className="container">
        <h1>Event Sponsors</h1>
        <div className="sponsor-container">
          {
            props.sponsors.map(sponsor => (
              <Sponsor {...sponsor.node} key={sponsor.node.title} />
            ))
          }
        </div>
        <div>Sponsorships are available! Download and review our <a href="/assets/2017_Sponsor_Package.docx">Sponsorship Packages</a></div>
      </div>
    </div>
  );
}

Sponsors.propTypes = {
  sponsors: PropTypes.array,
};

export default Sponsors;
