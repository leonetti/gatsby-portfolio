import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Landing from '../components/landing';
import About from '../components/about';
import Blogs from '../components/blogs';

const IndexPage = ({ data }) => (
  <Layout header="home">
    <Landing
      data={{
        name: data.contentfulAboutMe.name,
        designation: data.contentfulAboutMe.designation,
        bannerList: data.contentfulAboutMe.bannerList,
      }}
    />
    <About />
    <Blogs />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulAboutMe: PropTypes.object,
  }),
};

IndexPage.defaultProps = {
  data: {
    contentfulAboutMe: {},
  },
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    contentfulAboutMe {
      name
      designation
      bannerList
    }
  }
`;
