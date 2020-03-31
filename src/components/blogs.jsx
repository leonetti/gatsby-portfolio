import React from 'react';
import { Link } from 'gatsby';

const Blogs = () => (
  <div id="blogs">
    Blog titles go here
    <Link to="/blogs">
      <span>More Blogs</span>
    </Link>
  </div>
);

export default Blogs;
