import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';

import '../styles/reset.scss';
import '../styles/layout.module.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    <div>
      <main id="home">{children}</main>
    </div>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
