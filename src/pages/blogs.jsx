import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Blogs from '../components/blogs';

import Layout from '../components/layout';

import blogspageStyles from '../styles/blogspage.module.scss';

const BlogsPage = ({ data }) => (
  <Layout>
    <div className={blogspageStyles.wrapper}>
      <Blogs
        data={data.allContentfulBlogs}
        blogsPage
      />
    </div>
  </Layout>
);

BlogsPage.propTypes = {
  data: PropTypes.shape({
    allContentfulBlogs: PropTypes.object,
  }).isRequired,
};

export const pageQuery = graphql`
  query {
    allContentfulBlogs(sort: { fields: createdAt, order: DESC }) {
      nodes {
        title
        slug
        featureImage {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        createdAt(formatString:"MMM DD, YYYY")
      }
    }
  }
`;


export default BlogsPage;
