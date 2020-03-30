import React from 'react';

import Layout from '../components/layout';
import Blogs from '../components/blogs';

import indexStyles from '../styles/index.module.scss';

const IndexPage = () => (
  <Layout>
    <div className={indexStyles.link}>Hello Alexander!</div>
    <Blogs />
  </Layout>
);

export default IndexPage;
