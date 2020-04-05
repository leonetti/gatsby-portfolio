/* eslint-disable react/no-danger */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import shortId from 'shortid';
import classNames from 'classnames';

import { DiscussionEmbed } from 'disqus-react';
import Layout from '../components/layout';

import blogStyles from '../styles/blog.module.scss';

const Blog = ({ data }) => {
  const blog = data.contentfulBlogs;
  const disqusShortname = 'alexleonetti';
  const disqusConfig = {
    identifier: blog.id,
    title: blog.title,
  };
  return (
    <Layout>
      <div id="blog" className={blogStyles.wrapper}>
        <div className={blogStyles.container}>
          <div className={blogStyles.content}>
            <Img
              fluid={blog.featureImage.fluid}
              className={blogStyles.titlePhoto}
            />
            <h1 className={blogStyles.title}>{blog.title}</h1>
            <div className={blogStyles.date}>
              <span className={classNames({
                'fa fa-calendar-alt': true,
                [blogStyles.calendarIcon]: true,
              })}
              />
              <time>{blog.createdAt}</time>
            </div>
            <div
              className={blogStyles.contentfulContent}
              dangerouslySetInnerHTML={{
                __html: blog.description.childMarkdownRemark.html,
              }}
            />
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
          <div className={blogStyles.featuredBlogs}>
            <h3 className={blogStyles.featuredTitle}>Recent Blogs</h3>
            {data.allContentfulBlogs.nodes.map((node) => (
              <Fragment key={shortId.generate()}>
                {node.id !== blog.id && (
                  <Link to={`/${node.slug}`}>{node.title}</Link>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    contentfulBlogs: PropTypes.object,
    allContentfulBlogs: PropTypes.object,
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
    allContentfulBlogs(sort: { fields: createdAt, order: DESC }, limit: 10) {
      nodes {
        title
        slug
        id
      }
    }
  }
`;

export default Blog;
