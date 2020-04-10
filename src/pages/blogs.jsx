import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Blogs from '../components/blogs';
import SEO from '../components/seo';

import Layout from '../components/layout';

import blogspageStyles from '../styles/blogspage.module.scss';

const BlogsPage = ({ data }) => (
  <Layout>
    <SEO
      title="All Blogs"
      keywords={['All Blogs', 'Blogs']}
    />
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
