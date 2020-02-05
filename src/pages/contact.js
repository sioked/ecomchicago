import React from 'react';
import ContactPage from '../components/ContactPage';
import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout>
      <ContactPage />
    </Layout>
  );
}

Contact.defaultProps = {};

Contact.propTypes = {};

export default Contact;
