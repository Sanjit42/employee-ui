import React from 'react';

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

export default Skills;
