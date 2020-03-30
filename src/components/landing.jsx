import React from 'react';
import shortId from 'shortid';
import PropTypes from 'prop-types';

import landingStyles from '../styles/landing.module.scss';

const Landing = ({ data }) => (
  <div className={landingStyles.landing}>
    <span>Hello...</span>
    <h1>{`I'm ${data.name}.`}</h1>
    <h1>{`I'm a ${data.designation}.`}</h1>
    <ul className="sub-data">
      {data.bannerList.map((item) => <li key={shortId.generate()}>{item}</li>)}
    </ul>
  </div>
);

Landing.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    designation: PropTypes.string,
    bannerList: PropTypes.array,
  }).isRequired,
};

export default Landing;
