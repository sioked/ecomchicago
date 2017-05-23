import React from 'react';
import { prefixLink } from 'gatsby-helpers';

function Details() {
  return (
    <div id="details" className="section">
      <div className="container image-section-container">
        <div className="section-image">
          <img
            className="photo-1"
            src={prefixLink('/images/section-photo-1.jpg')}
            alt="The conference hosts"
          />
        </div>
        <div className="content-container">
          <div className="detail-row header-section">
            <h2>A 2-day Conference for Online Store Owners and Marketplace Sellers of All Levels!</h2>
            <p>Stay tuned and mark your calendars for eCom Chicago 2017. It&#39;s guaranteed to be 2 jam-packed days of learning that you can use to start, grow, or streamline your online business.</p>
          </div>

          <div className="detail-row">
            <div className="callout">
              <h3>
                <a href="https://www.entrepreneur.com/article/288833" target="_blank" rel="noopener noreferrer">Recently Highlighted in Entrepreneur Magazine!</a>
              </h3>
            </div>
          </div>
          <div className="detail-row header-section">
            <p>Partnering with the
               &nbsp;<a href="http://www.heartofamarine.org/">Heart of a Marine Foundation</a>&nbsp;
               to support veterans of all branches of the United States Armed Forces.</p>
          </div>
          <div className="detail-row detail-row-flex">
            <div className="detail-section">
              <h2>Date:</h2>
              <p>October 20th to October 21st, 2017</p>
            </div>
            <div className="detail-section">
              <h2>Location:</h2>
              <p>Belvedere Banquets and Events
                <br />
                1170 W. Devon Ave.
                <br />
                Elk Grove Village, IL 60007
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Details;
