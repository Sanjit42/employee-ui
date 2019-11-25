import React from 'react';

const Collapse = ({handleCollapse, label}) => (
  <div className="card-header" id="headingOne">
    <div className="skill">
      <h2>SKILLS & ABILITIES</h2>
      <button
        className="edit-skills"
        onClick={handleCollapse}
      >
        {label}
      </button>
    </div>
  </div>
);

export default Collapse;
