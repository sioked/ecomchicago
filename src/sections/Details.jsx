import React from 'react';
import photo1 from '../pages/images/section-photo-1.jpg';

function Details() {
  return (
    <div id="details" className="section">
      <div className="container image-section-container">
        <div className="section-image">
          <img
            className="photo-1"
            src={photo1}
            alt="The conference hosts"
          />
        </div>
        <div className="content-container">
          <div className="detail-row header-section">
            <h2>A 2-day Conference with a Bonus Pre-Event Vendor Showcase for Online Store Owners and Marketplace Sellers of All Levels!</h2>
            <p>Registrations are now being accepted for eComChicago 2017! It&#39;s guaranteed to be 2 jam-packed days of learning that you can use to start, grow, or streamline your online business.</p>
            <p><em>New this year</em> is a Pre-Event Vendor Showcase where our vendors will be signing up to give live-focused demos of their product or service. This is a great opportunity to learn about the tools, services, and products that can help you run your online business more effectively. The price is included in the cost of the normal conference and space is limited. Register early to guarantee your space at the vendor showcase!</p>
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
              <p>October 19th to October 21st, 2017</p>
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
