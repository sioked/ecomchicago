import PropTypes from 'prop-types';

const SplashImageType = PropTypes.shape({
  resize: PropTypes.shape({
    src: PropTypes.string,
  }),
});
export default SplashImageType;
