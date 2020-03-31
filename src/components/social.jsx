import React from 'react';
import PropTypes from 'prop-types';

import socialStyles from '../styles/social.module.scss';

const Social = ({ data }) => (
  <ul className={data.page === 'about' ? socialStyles.socialAbout : socialStyles.social}>
    <li>
      <a
        className="fab fa-linkedin-in"
        href={data.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={socialStyles.hidden}>LinkedIn</span>
      </a>
    </li>
    <li>
      <a
        className="fab fa-github"
        href={data.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={socialStyles.hidden}>GitHub</span>
      </a>
    </li>
  </ul>
);

Social.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default Social;
