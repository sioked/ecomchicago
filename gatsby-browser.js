import ReactGA from 'react-ga';

ReactGA.initialize('UA-98179763-1');

require('smoothscroll-polyfill').polyfill();

exports.onRouteUpdate = (location, page, pages) => { //eslint-disable-line
  ReactGA.pageview(location.pathname);
  console.log('Route update')
  if (location.hash) {
    setTimeout(() => {
      document.querySelector(`${location.hash}`).scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
};

const base = {
  base: 'speakers.js',
  basename: 'speakers.js',
  dir: '',
  dirname: '',
  ext: 'js',
  extname: '.js',
  name: 'speakers',
  path: 'speakers',
  root: '',
  stem: 'speakers',
};

exports.modifyRoutes = (routes) => {
  console.log('Inside modifyRoutes');
  console.log(routes);
  const out = {
    ...routes,
    pages: [
      ...routes.pages,
      {
        data: {},
        file: { ...base },
        path: '/speakers/ed',
        requirePath: 'speakers.js',
      },
    ],
  };
  console.log(out);
  return out;
};
