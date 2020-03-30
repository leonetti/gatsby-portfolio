import React from 'react';

import Layout from '../components/layout';
import Landing from '../components/landing';
import Blogs from '../components/blogs';

const IndexPage = () => (
  <Layout>
    <Landing />
    <Blogs />
  </Layout>
);

export default IndexPage;
