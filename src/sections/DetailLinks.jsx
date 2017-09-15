import React from 'react';
import Link from 'gatsby-link';
import config from '../../gatsby-config';

export default function DetailLinks() {
  return (
    <div className="detail-links">
      <a
        className="button"
        href={config.siteMetadata.registrationUrl}
      >
        Register Now
      </a>
      <Link to="/">Go Back</Link>
    </div>
  );
}
