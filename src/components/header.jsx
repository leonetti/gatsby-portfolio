import React from 'react';
import { Link } from 'gatsby';

import headerStyles from '../styles/header.module.scss';

const Header = () => (
  <div className={headerStyles.header}>
    <div className={headerStyles.container}>
      <div className={headerStyles.content}>
        <div className={headerStyles.logo}>
          {/* logo to go here */}
          <Link to="/" />
        </div>
        <div className={headerStyles.responsiveMenu} />
        <div className={headerStyles.menu}>
          <ul>
            <li>
              <Link to="/#home">Home</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#skills">Skills</Link>
            </li>
            <li>
              <Link to="/#blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/#work">Work</Link>
            </li>
            <li>
              <Link to="/#testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
