require('dotenv').config();

module.exports = {
  siteMetadata: {
    title:
      'ecomChicago 2020 | A 3-day Conference for Online Entrepreners and Store Owners',
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
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATOCMS_API_TOKEN,
        previewMode: process.env.DATOCMS_PREVIEW_ENABLED,
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
