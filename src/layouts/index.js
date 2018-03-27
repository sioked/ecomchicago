import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import content from '../constants/content.js';
import './index.scss';

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
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
