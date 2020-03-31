import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Landing from '../components/landing';
import About from '../components/about';
import Skills from '../components/skills';
import Blogs from '../components/blogs';
import Work from '../components/work';
import Testimonials from '../components/testimonials';
import Contact from '../components/contact';

const IndexPage = ({ data }) => (
  <Layout header="home">
    <Landing
      data={{
        name: data.contentfulAboutMe.name,
        designation: data.contentfulAboutMe.designation,
        bannerList: data.contentfulAboutMe.bannerList,
        bannerImage: data.contentfulAboutMe.bannerImage,
      }}
    />
    <About />
    <Skills />
    <Blogs />
    <Work />
    <Testimonials />
    <Contact />
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
      bannerImage {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
  }
`;
