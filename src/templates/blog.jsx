/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import blogStyles from '../styles/blog.module.scss';

const Blog = ({ data }) => {
  const blog = data.contentfulBlogs;
  return (
    <Layout>
      <div id="blog" className={blogStyles.wrapper}>
        <div className={blogStyles.container}>
          <Img
            fluid={blog.featureImage.fluid}
            className={blogStyles.titlePhoto}
          />
          <h1>{blog.title}</h1>
          <p>{blog.createdAt}</p>
          <div dangerouslySetInnerHTML={{
            __html: blog.description.childMarkdownRemark.html,
          }}
          />
        </div>
      </div>

    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    contentfulBlogs: PropTypes.object,
  }).isRequired,
};

export const pageQuery = graphql`
  query SinglePostQuery($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      id
      title
      slug
      featureImage {
        fluid(maxWidth: 1500) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      createdAt(formatString:"MMM DD, YYYY")
    }
  }
`;

export default Blog;
