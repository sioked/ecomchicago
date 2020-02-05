/**
</Layou</Layout>t> * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const speakerTemplate = path.resolve('./src/templates/speakers.js');
  const pageTemplate = path.resolve('./src/templates/page.js');
  const speakerData = await graphql(`
    query speakersQuery {
      allDatoCmsSpeaker {
        edges {
          node {
            name
            slug
            title
            blurb
            photo {
              resolutions(width: 200) {
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `);
  if (
    speakerData.errors ||
    !speakerData.data ||
    !speakerData.data.allDatoCmsSpeaker
  ) {
    throw speakerData.errors;
  }

  _.each(speakerData.data.allDatoCmsSpeaker.edges, edge => {
    console.log('Creating page for: ', edge.node.slug);
    createPage({
      path: `speakers/${edge.node.slug}`, // required
      component: speakerTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });


  const pages = await graphql(`
    query pageQuery {
      allDatoCmsPage {
        edges {
          node {
            slug
            title
            content
            splashImage {
              resolutions(width: 1024) {
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `);
  if (
    pages.errors ||
    !pages.data ||
    !pages.data.allDatoCmsPage
  ) {
    throw pages.errors;
  }

  // Create blog posts pages.
  _.each(pages.data.allDatoCmsPage.edges, edge => {
    console.log('Creating page for: ', edge.node.slug);
    createPage({
      path: edge.node.slug, // required
      component: pageTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
