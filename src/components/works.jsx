import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import Img from 'gatsby-image';

import worksStyles from '../styles/works.module.scss';

const Work = ({ data }) => (
  <div id="work" className={worksStyles.wrapper}>
    <div className={worksStyles.container}>
      <h2 className={worksStyles.heading}>Work</h2>
      <ul className={worksStyles.worksList}>
        {data.nodes.map((work) => (
          <li key={shortId.generate()} className={worksStyles.work}>
            <div className={worksStyles.inner}>
              <a className={worksStyles.workLink} href={`${work.url}`} target="_blank" rel="noopener noreferrer">{`${work.siteName} - ${work.url}`}</a>
              <Img
                fluid={work.image.fluid}
                className={worksStyles.imageWrapper}
              />
              <h3 className={worksStyles.siteName}>{work.siteName}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

Work.propTypes = {
  data: PropTypes.shape({
    nodes: PropTypes.array,
  }).isRequired,
};

export default Work;
