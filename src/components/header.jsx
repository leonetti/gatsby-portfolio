import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

import headerStyles from '../styles/header.module.scss';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
};

const icon = {
  hidden: { x: -10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Icon = () => (
  <svg viewBox="0 0 55 55" className={headerStyles.logoItem}>
    <path
      d="M 48.634 53.809 L 32.179 53.809 A 10.204 10.204 0 0 1 31.649 52.654 Q 31.165 51.423 30.75 49.663 A 37.259 37.259 0 0 1 30.616 49.073 A 14.784 14.784 0 0 1 20.143 54.673 A 21.261 21.261 0 0 1 17.921 54.786 A 20.521 20.521 0 0 1 11.111 53.692 A 18.016 18.016 0 0 1 5.226 50.269 A 15.011 15.011 0 0 1 1.267 45.084 A 14.812 14.812 0 0 1 0.001 38.917 A 18.481 18.481 0 0 1 0.751 33.505 A 13.962 13.962 0 0 1 6.349 25.928 A 21.328 21.328 0 0 1 12.187 23.166 Q 14.971 22.299 18.358 21.892 A 54.268 54.268 0 0 1 24.806 21.534 L 29.884 21.534 L 29.884 18.751 Q 29.884 11.475 23.585 11.475 Q 18.959 11.475 17.985 15.066 A 8.306 8.306 0 0 0 17.726 17.237 L 1.271 17.237 A 14.467 14.467 0 0 1 6.173 6.108 A 19.455 19.455 0 0 1 7.789 4.786 A 23.848 23.848 0 0 1 16.761 0.798 Q 20.069 0.051 23.902 0.004 A 42.122 42.122 0 0 1 24.415 0.001 A 33.53 33.53 0 0 1 30.862 0.583 Q 36.537 1.696 40.382 4.932 A 16.519 16.519 0 0 1 46.203 15.862 A 23.294 23.294 0 0 1 46.388 18.458 L 46.388 41.846 A 40.602 40.602 0 0 0 46.638 45.963 Q 47.119 50.112 48.508 52.747 A 11.517 11.517 0 0 0 48.634 52.979 L 48.634 53.809 Z M 29.884 38.77 L 29.884 30.323 L 25.099 30.323 A 13.944 13.944 0 0 0 21.856 30.666 Q 16.505 31.95 16.505 38.038 A 5.413 5.413 0 0 0 16.769 39.766 A 4.503 4.503 0 0 0 18.019 41.676 A 5.214 5.214 0 0 0 20.924 43.005 A 7.093 7.093 0 0 0 21.876 43.067 A 11.828 11.828 0 0 0 24.119 42.866 Q 25.477 42.604 26.563 41.999 A 7.052 7.052 0 0 0 26.979 41.749 A 10.621 10.621 0 0 0 28.411 40.644 Q 29.171 39.94 29.661 39.156 A 6.159 6.159 0 0 0 29.884 38.77 Z"
      variants={icon}
      initial="hidden"
      animate="visible"
    />
  </svg>
);

const Header = () => (
  <div className={headerStyles.header}>
    <div className={headerStyles.container}>
      <div className={headerStyles.content}>
        <div className={headerStyles.logoContainer}>
          <Link to="/">
            <motion.div
              className={headerStyles.logoBox}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={icon}
                whileHover={{ scale: 1.05, rotate: 10 }}
              >
                <Icon />
              </motion.div>
            </motion.div>
          </Link>
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
