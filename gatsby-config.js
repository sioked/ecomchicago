require('dotenv').config();

console.log('AccessToken: ', process.env.CONTENTFUL_ACCESS_TOKEN);

module.exports = {
  siteMetadata: {
    title:
      'ecomChicago 2018 | A 3-day Conference for Online Entrepreners and Store Owners',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'x3z8k6e8dgnq',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATOCMS_API_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
  ],
};
