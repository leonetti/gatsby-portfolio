import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Landing from '../components/landing';
import About from '../components/about';
import Skills from '../components/skills';
import Blogs from '../components/blogs';
import Works from '../components/works';
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
    <Skills
      data={data.allContentfulSkills}
    />
    <Blogs
      data={data.allContentfulBlogs}
    />
    <Works
      data={data.allContentfulWorks}
    />
    <Testimonials
      data={data.allContentfulTestimonials}
    />
    <Contact />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulAboutMe: PropTypes.object,
    allContentfulSkills: PropTypes.object,
    allContentfulBlogs: PropTypes.object,
    allContentfulWorks: PropTypes.object,
    allContentfulTestimonials: PropTypes.object,
  }).isRequired,
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
          ...GatsbyContentfulFluid_tracedSVG
        }
      },
      photo {
        fluid(maxWidth: 900) {
          ...GatsbyContentfulFluid_withWebp
        }
      },
      description {
        description
      },
      age,
      location,
      gmail,
    }
    allContentfulSkills(sort: {
      fields: [createdAt],
      order: DESC
    }) {
      nodes {
        title,
        createdAt,
        description {
          description
        }
      }
    }
    allContentfulBlogs(sort: { fields: createdAt, order: DESC }, limit: 5) {
      nodes {
        title
        slug
        featureImage {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        createdAt(formatString:"MMM DD, YYYY")
      }
    }
    allContentfulWorks(sort: { fields: endDate, order: DESC }, limit: 5) {
      nodes {
        siteName
        url
        startDate(formatString:"MMM YYYY")
        endDate(formatString:"MMM YYYY")
        image {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    allContentfulTestimonials(sort: { fields: createdAt, order: DESC }, limit: 4) {
      nodes {
        name
        subTitle
        description {
          childMarkdownRemark {
            html
          }
        }
        avatarImage {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;
