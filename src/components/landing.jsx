import React from 'react';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';

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
      objectFit="cover"
      objectPosition="50% 50%"
      className={landingStyles.hero}
    />
    <div className={landingStyles.bannerInfo}>
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
      <ul className={landingStyles.social}>
        <li>
          <a
            className="fab fa-linkedin-in"
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={landingStyles.hidden}>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            className="fab fa-github"
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={landingStyles.hidden}>GitHub</span>
          </a>
        </li>
      </ul>
    </div>
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
