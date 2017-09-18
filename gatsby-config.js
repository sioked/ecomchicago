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
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        resolve: 'gatsby-remark-images',
        options: {
          // It's important to specify the maxWidth (in pixels) of
          // the content container as this plugin uses this as the
          // base for generating different widths of each image.
          maxWidth: 590,
          // Remove the default behavior of adding a link to each
          // image.
          linkImagesToOriginal: false,
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
  ],
};
