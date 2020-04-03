import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SmoothScroll from 'smooth-scroll';

import Header from './header';
import Footer from './footer';

import '../styles/reset.scss';
import '../styles/common.scss';
import '../styles/font-awesome.css';

import { scrollToAnchor } from '../helpers/scroll-anchor';


let smoothScrollInstance;

if (typeof window !== 'undefined') {
  smoothScrollInstance = new SmoothScroll('a[href*="#"]', {
    header: '[data-scroll-header]',
  });
}

const Layout = ({ children, header }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      scrollToAnchor(smoothScrollInstance);
    }
  }, []);
  return (
    <>
      <Header header={header} />
      <div>
        <main id="home">{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
};

Layout.defaultProps = {
  header: undefined,
};

export default Layout;
