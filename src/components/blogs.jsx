import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import blogsStyles from '../styles/blogs.module.scss';

const Blogs = ({ data }) => (
  <div id="blogs" className={blogsStyles.wrapper}>
    <div className={blogsStyles.container}>
      <h2 className={blogsStyles.heading}>Blogs</h2>

      <ul className="blogs-list">
        {data.nodes.map((item) => (
          <li key={shortId.generate()}>
            {/* <Link to={item.slug}> */}
            <Link to="/blogs">
              <Img
                fluid={item.featureImage.fluid}
              />
              <div>
                <h3>{item.title}</h3>
                <time>{item.createdAt}</time>
              </div>

            </Link>
          </li>
        ))}
      </ul>

      <Link to="/blogs">
        <span>More Blogs</span>
      </Link>
    </div>
  </div>
);

Blogs.propTypes = {
  data: PropTypes.shape({
    nodes: PropTypes.array,
  }).isRequired,
};

export default Blogs;
