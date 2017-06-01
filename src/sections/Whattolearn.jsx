import React from 'react';
import sectionPhoto2 from '../pages/images/section-photo-2.jpg';

function WhatToLearn() {
  return (
    <div id="section3" className="section">
      <div className="container image-section-container">
        <div className="section-image">
          <img
            className="photo-2"
            src={sectionPhoto2}
            alt="Accomplished Speakers"
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
  );
}

export default WhatToLearn;
