/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const _ = require('lodash');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const speakerTemplate = path.resolve('./src/templates/speakers.js');
    graphql(`
      query speakersQuery {
        allDatoCmsSpeaker {
          edges {
            node {
              name
              slug
              title
              blurb
              photo {
                id
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
    `).then(result => {
      if (result.errors || !result.data || !result.data.allDatoCmsSpeaker) {
        reject(result.errors);
      }

      // Create blog posts pages.
      _.each(result.data.allDatoCmsSpeaker.edges, edge => {
        console.log('Creating page for: ', edge.node.slug);
        createPage({
          path: `speakers/${edge.node.slug}`, // required
          component: speakerTemplate,
          context: {
            slug: edge.node.slug,
          },
        });
      });
      resolve();
    });
  });
};
