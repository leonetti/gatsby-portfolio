import React from 'react';
import { Link } from 'gatsby';

const Blogs = () => (
  <>
    <div>Blog titles go here</div>

    <Link to="/blogs">
      <span>More Blogs</span>
    </Link>
  </>
);

export default Blogs;
