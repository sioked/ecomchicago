import ReactGA from 'react-ga';

ReactGA.initialize('UA-98179763-1');

require('smoothscroll-polyfill').polyfill();

exports.onRouteUpdate = (location, page, pages) => { //eslint-disable-line
  ReactGA.pageview(location.pathname);
  if (location.hash) {
    setTimeout(() => {
      document.querySelector(`${location.hash}`).scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
};
