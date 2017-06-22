module.exports = {
  siteMetadata: {
    title: 'ecomChicago 2017 | A three day conference for onln',
    gMapsUrl: 'https://www.google.com/maps/api/js?key=AIzaSyCS1j9k6FEHLsXt5T_xyUWTJ6hqM3FTVyU',
    registrationUrl: 'http://events.r20.constantcontact.com/register/event?oeidk=a07ee6m5j4sf8812454&llr=mvn944bab&showPage=true',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    'gatsby-plugin-sass',
  ],
};
