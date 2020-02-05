import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './Header';
import Footer from './Footer';
import content from '../constants/content.js';
import './layout.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={content.siteTitle}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
