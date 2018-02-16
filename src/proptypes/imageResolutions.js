import PropTypes from 'prop-types';

const resolutions = PropTypes.shape({
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
  srcSet: PropTypes.arrayOf(PropTypes.string),
  base64: PropTypes.string,
  aspectRatio: PropTypes.string,
});

export default resolutions;
