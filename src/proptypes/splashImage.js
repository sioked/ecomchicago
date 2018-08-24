import PropTypes from 'prop-types';

const SplashImageType = PropTypes.shape({
  fixed: PropTypes.shape({
    src: PropTypes.string,
  }),
});
export default SplashImageType;
