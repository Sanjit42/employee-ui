import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({handleCollapse, label}) => (
  <div className="user-abilities">
    <div className="skill">
      <h2>SKILLS & ABILITIES</h2>
      <button
        className="edit-skill"
        onClick={handleCollapse}
      >
        {label}
      </button>
    </div>
  </div>
);

Skills.propTypes = {
  handleCollapse: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default Skills;
