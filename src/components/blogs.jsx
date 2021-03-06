import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import classNames from 'classnames';

import blogsStyles from '../styles/blogs.module.scss';

const Blogs = ({ data, blogsPage }) => (
  <div id="blogs" className={blogsStyles.wrapper}>
    <section className={blogsStyles.container}>
      <h2 className={blogsStyles.heading}>Blogs</h2>

      <ul className={blogsStyles.blogsList}>
        {data.nodes.map((item) => (
          <li key={shortId.generate()} className={blogsStyles.blog}>
            <div className={blogsStyles.inner}>
              <Link to={`/${item.slug}`} className={blogsStyles.blogLink} />
              <Img
                fluid={item.featureImage.fluid}
                className={blogsStyles.imageWrapper}
              />
              <section className={blogsStyles.blogInfo}>
                <h3 className={blogsStyles.title}>{item.title}</h3>
                <span className={classNames({
                  'fa fa-calendar-alt': true,
                  [blogsStyles.calendarIcon]: true,
                })}
                />
                <time className={blogsStyles.date}>{item.createdAt}</time>
              </section>
            </div>
          </li>
        ))}
      </ul>

      {(!blogsPage && data.nodes.length >= 5) && (
        <Link to="/blogs">
          <span>More Blogs</span>
        </Link>
      )}
    </section>
  </div>
);

Blogs.propTypes = {
  data: PropTypes.shape({
    nodes: PropTypes.array,
  }).isRequired,
  blogsPage: PropTypes.bool,
};

Blogs.defaultProps = {
  blogsPage: false,
};

export default Blogs;
