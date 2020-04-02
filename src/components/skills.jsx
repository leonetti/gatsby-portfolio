import React from 'react';
import PropTypes from 'prop-types';

import skillsStyles from '../styles/skills.module.scss';

const Skills = ({ data }) => (
  <div id="skills" className={skillsStyles.wrapper}>
    <div className={skillsStyles.container}>
      <h2 className={skillsStyles.heading}>Skills</h2>
      <div className={skillsStyles.skillList}>
        {data.nodes.map((skill) => (
          <div
            className={skillsStyles.card}
            key={skill.title}
          >
            <h2 className={skillsStyles.cardTitle}>{skill.title}</h2>
            <p className={skillsStyles.cardDescription}>{skill.description.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

Skills.propTypes = {
  data: PropTypes.shape({
    nodes: PropTypes.array,
  }).isRequired,
};

export default Skills;
