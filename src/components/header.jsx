/* eslint-disable max-len */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

import headerStyles from '../styles/header.module.scss';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    // scale: [0.2, 1.1, 1],
    scale: 1,
    // rotate: [180, 360],
    rotate: 360,
    transition: {
      delay: 0.3,
      when: 'beforeChildren',
      // staggerChildren: 0.2,
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
  // <svg viewBox="0 0 55 55" className={headerStyles.logoItem}>
  //   <path
  //     d="M 48.634 53.809 L 32.179 53.809 A 10.204 10.204 0 0 1 31.649 52.654 Q 31.165 51.423 30.75 49.663 A 37.259 37.259 0 0 1 30.616 49.073 A 14.784 14.784 0 0 1 20.143 54.673 A 21.261 21.261 0 0 1 17.921 54.786 A 20.521 20.521 0 0 1 11.111 53.692 A 18.016 18.016 0 0 1 5.226 50.269 A 15.011 15.011 0 0 1 1.267 45.084 A 14.812 14.812 0 0 1 0.001 38.917 A 18.481 18.481 0 0 1 0.751 33.505 A 13.962 13.962 0 0 1 6.349 25.928 A 21.328 21.328 0 0 1 12.187 23.166 Q 14.971 22.299 18.358 21.892 A 54.268 54.268 0 0 1 24.806 21.534 L 29.884 21.534 L 29.884 18.751 Q 29.884 11.475 23.585 11.475 Q 18.959 11.475 17.985 15.066 A 8.306 8.306 0 0 0 17.726 17.237 L 1.271 17.237 A 14.467 14.467 0 0 1 6.173 6.108 A 19.455 19.455 0 0 1 7.789 4.786 A 23.848 23.848 0 0 1 16.761 0.798 Q 20.069 0.051 23.902 0.004 A 42.122 42.122 0 0 1 24.415 0.001 A 33.53 33.53 0 0 1 30.862 0.583 Q 36.537 1.696 40.382 4.932 A 16.519 16.519 0 0 1 46.203 15.862 A 23.294 23.294 0 0 1 46.388 18.458 L 46.388 41.846 A 40.602 40.602 0 0 0 46.638 45.963 Q 47.119 50.112 48.508 52.747 A 11.517 11.517 0 0 0 48.634 52.979 L 48.634 53.809 Z M 29.884 38.77 L 29.884 30.323 L 25.099 30.323 A 13.944 13.944 0 0 0 21.856 30.666 Q 16.505 31.95 16.505 38.038 A 5.413 5.413 0 0 0 16.769 39.766 A 4.503 4.503 0 0 0 18.019 41.676 A 5.214 5.214 0 0 0 20.924 43.005 A 7.093 7.093 0 0 0 21.876 43.067 A 11.828 11.828 0 0 0 24.119 42.866 Q 25.477 42.604 26.563 41.999 A 7.052 7.052 0 0 0 26.979 41.749 A 10.621 10.621 0 0 0 28.411 40.644 Q 29.171 39.94 29.661 39.156 A 6.159 6.159 0 0 0 29.884 38.77 Z"
  //     variants={icon}
  //     initial="hidden"
  //     animate="visible"
  //   />
  // </svg>

  <svg viewBox="0 0 58 93" className={headerStyles.logoItem}>
    <path
      d="M 47.266 20.362 L 47.266 57.52 L 38.379 57.52 A 26.601 26.601 0 0 1 37.228 57.497 Q 36.159 57.45 35.432 57.31 A 5.861 5.861 0 0 1 35.059 57.227 A 2.785 2.785 0 0 1 33.388 55.999 A 3.683 3.683 0 0 1 33.301 55.86 A 3.542 3.542 0 0 1 32.967 55.064 Q 32.721 54.236 32.676 53.004 A 15.623 15.623 0 0 1 32.666 52.442 L 32.666 52.051 A 19.529 19.529 0 0 1 29.035 54.676 A 24.846 24.846 0 0 1 26.416 55.957 Q 22.706 57.52 18.165 57.52 A 21.138 21.138 0 0 1 12.883 56.884 A 17.415 17.415 0 0 1 8.667 55.2 A 16.244 16.244 0 0 1 2.271 48.755 Q 0 44.629 0 39.405 A 15.812 15.812 0 0 1 0.548 35.155 A 12.728 12.728 0 0 1 2.515 31.055 A 15.73 15.73 0 0 1 6.492 27.266 A 21.272 21.272 0 0 1 9.717 25.489 A 28.954 28.954 0 0 1 14.871 23.824 Q 20.082 22.613 27.561 22.343 A 124.213 124.213 0 0 1 32.032 22.266 L 32.032 18.75 A 19.292 19.292 0 0 0 31.97 17.145 Q 31.808 15.219 31.226 14.16 A 3.487 3.487 0 0 0 29.969 12.873 Q 29.456 12.556 28.789 12.337 A 7.828 7.828 0 0 0 28.15 12.158 Q 25.879 11.621 20.997 11.621 A 13.797 13.797 0 0 0 19.509 11.713 Q 18.008 11.878 15.904 12.338 A 70.851 70.851 0 0 0 13.868 12.818 Q 9.758 13.845 6.656 15.143 A 33.313 33.313 0 0 0 5.665 15.576 L 2.295 5.811 Q 4.06 4.752 7.258 3.534 A 69.154 69.154 0 0 1 7.959 3.272 A 55.423 55.423 0 0 1 12.884 1.725 A 68.296 68.296 0 0 1 16.114 0.952 A 42.799 42.799 0 0 1 22.062 0.093 A 36.815 36.815 0 0 1 24.659 0 A 60.213 60.213 0 0 1 29.628 0.192 Q 31.993 0.389 33.992 0.786 A 24.358 24.358 0 0 1 37.623 1.782 A 13.07 13.07 0 0 1 44.874 7.984 A 16.911 16.911 0 0 1 46.32 11.751 Q 46.793 13.553 47.03 15.706 A 42.742 42.742 0 0 1 47.266 20.362 Z M 32.032 44.141 L 32.032 30.86 A 30.296 30.296 0 0 0 29.267 30.994 Q 27.822 31.126 26.225 31.39 A 51.22 51.22 0 0 0 25.757 31.47 A 42.699 42.699 0 0 0 23.934 31.827 Q 22.184 32.212 21.045 32.656 A 9.259 9.259 0 0 0 20.557 32.862 A 10.835 10.835 0 0 0 18.746 33.734 A 7.986 7.986 0 0 0 17.041 35.108 A 4.477 4.477 0 0 0 16.084 36.768 Q 15.859 37.444 15.774 38.267 A 10.169 10.169 0 0 0 15.723 39.307 Q 15.723 43.213 17.847 45.215 A 7.223 7.223 0 0 0 21.665 47.076 A 10.112 10.112 0 0 0 23.389 47.217 A 13.381 13.381 0 0 0 26.496 46.836 A 17.22 17.22 0 0 0 28.516 46.216 A 18.168 18.168 0 0 0 29.743 45.711 Q 30.922 45.17 31.579 44.608 A 3.189 3.189 0 0 0 32.032 44.141 Z"
      variants={icon}
      initial="hidden"
      animate="visible"
    />
  </svg>
);

const MenuToggle = ({ toggle }) => (
  <button type="button" onClick={toggle} className={headerStyles.menuToggleButton}>
    <svg width="23" height="18" viewBox="0 0 23 18">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

MenuToggle.propTypes = {
  toggle: PropTypes.bool.isRequired,
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="white"
    strokeLinecap="round"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  return (
    <div className={classNames({
      [headerStyles.header]: true,
      [headerStyles.responsiveMenuOpen]: isOpen,
    })}
    >
      <div className={headerStyles.container}>
        <div className={headerStyles.content}>
          <div className={headerStyles.logoContainer}>
            <Link to="/" onClick={() => setIsOpen(false)}>
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
          <motion.div className={headerStyles.menuToggle} ref={containerRef} initial={false} animate={isOpen ? 'open' : 'closed'}>
            <MenuToggle toggle={() => setIsOpen((prevState) => !prevState)} />
          </motion.div>
          <div className={headerStyles.responsiveMenu} />
          <div className={headerStyles.menu}>
            <ul>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/#home">Home</Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/#about">About</Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/#skills">Skills</Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/#blogs">Blogs</Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/#work">Work</Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/#testimonials">Testimonials</Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
