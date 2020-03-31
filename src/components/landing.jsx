import React from 'react';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';

import Social from './social';

import landingStyles from '../styles/landing.module.scss';

const textVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: [0, 1.5, 1],
  },
};

const Landing = ({ data }) => (
  <div className={landingStyles.landing}>
    <Img
      fluid={data.bannerImage.fluid}
      className={landingStyles.hero}
    />
    <section className={landingStyles.bannerInfo}>
      <motion.p
        className={landingStyles.bannerSubText}
        initial="hidden"
        animate="visible"
        variants={textVariant}
        transition={{ duration: 1 }}
      >
        Hello...
      </motion.p>
      <h1 className={landingStyles.heading}>
        {`I'm ${data.name}.`}
      </h1>
      <h1 className={landingStyles.bannerSubText}>{`I'm a ${data.designation}.`}</h1>
      <ul className={landingStyles.bannerList}>
        {data.bannerList.map((item) => (
          <li key={shortId.generate()}>{item}</li>
        ))}
      </ul>
      <Social
        data={{
          linkedin: data.linkedin,
          github: data.github,
        }}
      />
    </section>
  </div>
);

Landing.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    designation: PropTypes.string,
    bannerList: PropTypes.array,
    bannerImage: PropTypes.object,
    linkedin: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default Landing;
