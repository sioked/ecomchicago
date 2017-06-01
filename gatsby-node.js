const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { upsertPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const speakerTemplate = path.resolve('./src/templates/speaker.js');
    resolve(
      graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      console.log('Got some result data');
      console.log(result.data.allMarkdownRemark);
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          console.log('Upserting page with these values: ');
          console.log({
            path: edge.node.fields.slug, // required
            component: speakerTemplate,
            context: {
              slug: edge.node.fields.slug,
            },
          });
          upsertPage({
            path: edge.node.fields.slug, // required
            component: speakerTemplate,
            context: {
              slug: edge.node.fields.slug,
            },
          });
        });
      })
    );
  });
};

// Add custom slug for blog posts to both File and MarkdownRemark nodes.
exports.onNodeCreate = ({ node, boundActionCreators, getNode }) => {
  const { addFieldToNode } = boundActionCreators;
  if (node.internal.type === 'File') {
    console.log('Adding file');
    console.log(node);
    const parsedFilePath = path.parse(node.relativePath);
    const slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    addFieldToNode({ node, fieldName: 'slug', fieldValue: slug });
  } else if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    console.log('Adding slug');
    console.log(fileNode.fields.slug);
    addFieldToNode({
      node,
      fieldName: 'slug',
      fieldValue: fileNode.fields.slug,
    });
  }
};
