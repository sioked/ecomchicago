const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const speakerTemplate = path.resolve('./src/templates/speaker.js');
    const infoTemplate = path.resolve('./src/templates/info.js');
      graphql(`
        {
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  layout
                  path
                }
              }
            }
          }
        }
    `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          const tmpl = edge.node.frontmatter.layout === 'speaker' ? speakerTemplate : infoTemplate;
          createPage({
            path: edge.node.fields.slug, // required
            component: tmpl,
            context: {
              slug: edge.node.fields.slug,
            },
          });
        });
      resolve();
    })
  });
};

// Add custom slug for blog posts to both File and MarkdownRemark nodes.
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    console.log(slug);
    const fileNode = getNode(node.parent);
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};
