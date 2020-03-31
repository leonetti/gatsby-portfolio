import React from 'react';
import PropTypes from 'prop-types';
import smoothScroll from 'smooth-scroll';

import Header from './header';
import Footer from './footer';

import '../styles/reset.scss';
import '../styles/common.scss';
import '../styles/font-awesome.css';


if (typeof window !== 'undefined') {
  smoothScroll('a[href*="#"]', {
    header: '[data-scroll-header]',
  });
}

const Layout = ({ children, header }) => (
  <>
    <Header header={header} />
    <div>
      <main id="home">{children}</main>
    </div>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
};

Layout.defaultProps = {
  header: undefined,
};

export default Layout;
