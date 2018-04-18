import React from 'react';
import PropTypes from 'prop-types';

function Link({ ...props }) {
  if (/^http/.test(props.href)) {
    return (
      <a href={props.href} target="_blank" {...props}>
        {props.children}
      </a>
    );
  }
  return (
    <a href={props.href} {...props}>
      {props.children}
    </a>
  );
}

Link.defaultProps = {};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
