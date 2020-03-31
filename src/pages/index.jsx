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
        linkedin: data.contentfulAboutMe.linkedin,
        github: data.contentfulAboutMe.github,
      }}
    />
    <About
      data={{
        photo: data.contentfulAboutMe.photo,
        avatarImage: data.contentfulAboutMe.avatarImage,
        name: data.contentfulAboutMe.name,
        designation: data.contentfulAboutMe.designation,
        description: data.contentfulAboutMe.description.description,
        age: data.contentfulAboutMe.age,
        location: data.contentfulAboutMe.location,
        gmail: data.contentfulAboutMe.gmail,
        linkedin: data.contentfulAboutMe.linkedin,
        github: data.contentfulAboutMe.github,
      }}
    />
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
      name,
      designation,
      linkedin,
      github,
      bannerList,
      bannerImage {
        fluid(maxWidth: 1500) {
          ...GatsbyContentfulFluid
        }
      },
      photo {
        file {
          url
        }
        fluid(maxWidth: 900) {
          ...GatsbyContentfulFluid
        }
      },
      description {
        description
      },
      age,
      location,
      gmail,
    }
  }
`;
