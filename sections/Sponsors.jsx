import React from 'react';

import content from '../data/sponsors';

function Sponsor(sponsor) {
  return (
    <a className="sponsor" href={sponsor.url}>
      <img src={sponsor.logo} alt={sponsor.title} />
      <h3>{sponsor.title}</h3>
    </a>
  );
}

function Sponsors() {
  return (
    <div id="sponsors" className="section">
      <div className="container">
        <h1>Event Sponsors</h1>
        <div className="sponsor-container">
          {
            content.data.sponsors.map(sponsor => (
              <Sponsor {...sponsor} />
            ))
          }
        </div>
        <div>Sponsorships are available! Download and review our <a href="/files/2017_Sponsor_Package.doc">Sponsorship Packages</a></div>
      </div>
    </div>
  );
}

export default Sponsors;
