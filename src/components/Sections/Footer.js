import React from 'react';
import PropTypes from 'prop-types';
import { Footer as BFooter, Container } from 'bloomer';
function Footer({...props}) {
  return (
    <BFooter>
      <Container>This the footer</Container>
    </BFooter>
  );
}

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
