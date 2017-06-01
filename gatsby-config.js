module.exports = {
  siteMetadata: {
    title: 'ecomChicago 2017',
    gMapsUrl: 'https://www.google.com/maps/api/js?key=AIzaSyCS1j9k6FEHLsXt5T_xyUWTJ6hqM3FTVyU',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data`,
        name: 'data',
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-sass',
  ],
};
