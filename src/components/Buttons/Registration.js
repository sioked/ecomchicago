import React from 'react';

import { Button } from 'bloomer';

function Registration() {
  return process.env.REGISTRATION_ENABLED ? (
    <Button
      href="#"
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
