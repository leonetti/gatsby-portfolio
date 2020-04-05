import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';

import '../styles/reset.scss';
import '../styles/common.scss';
import '../styles/font-awesome.css';

const Layout = ({ children, header }) => (
  <>
    <Header header={header} />
    <div>
      <main id="main">{children}</main>
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
