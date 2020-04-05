const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blog.jsx');
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query {
      allContentfulBlogs(sort: { fields: createdAt, order: DESC }, limit: 100) {
        nodes {
          slug,
          id
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    result.data.allContentfulBlogs.nodes.forEach((node) => {
      createPage({
        // Path for this page — required
        path: `${node.slug}`,
        component: blogPostTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
          slug: node.slug,
        },
      });
    });
  });
};
