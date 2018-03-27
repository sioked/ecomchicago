import React from 'react';

import { Button } from 'bloomer';

function Registration() {
  return !process.env.GATSBY_REGISTRATION_DISABLED ? (
    <Button
      href={process.env.GATSBY_REGISTRATION_LINK || '#'}
      isColor="danger"
      hasTextWeight="bold"
      style={{
        fontWeight: '700',
      }}
    >
      Register Now
    </Button>
  ) : (
    null
  );
}

Registration.defaultProps = {};

Registration.propTypes = {};

export default Registration;
