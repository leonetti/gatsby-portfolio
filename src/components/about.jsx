import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import Social from './social';

import aboutStyles from '../styles/about.module.scss';

const About = ({ data }) => (
  <div id="about" className={aboutStyles.wrapper}>
    <Img
      fluid={data.photo.fluid}
      objectFit="cover"
      objectPosition="top center"
      className={aboutStyles.photo}
    />
    <section className={aboutStyles.content}>
      <span className={aboutStyles.name}>{`My name is ${data.name}.`}</span>
      <h2 className={aboutStyles.heading}>{`I'm a Professional ${data.designation}`}</h2>
      <p className={aboutStyles.description}>{data.description}</p>
      <ul className={aboutStyles.details}>
        <li>
          <strong>Full Name</strong>
          <p>{data.name}</p>
        </li>
        <li>
          <strong>Age</strong>
          <p>
            {data.age}
            {' '}
            Years
          </p>
        </li>
        <li>
          <strong>Location</strong>
          <p>{data.location}</p>
        </li>
        <li>
          <strong>Email</strong>
          <p>
            <a target="_blank" rel="noopener noreferrer" href={`mailto:${data.gmail}`}>{data.gmail}</a>
          </p>
        </li>
      </ul>
      <Social
        data={{
          page: 'about',
          linkedin: data.linkedin,
          github: data.github,
        }}
      />
    </section>
  </div>
);

About.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.object,
    name: PropTypes.string,
    designation: PropTypes.string,
    description: PropTypes.string,
    age: PropTypes.string,
    location: PropTypes.string,
    gmail: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default About;
