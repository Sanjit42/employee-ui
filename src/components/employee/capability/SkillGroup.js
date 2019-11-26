import React from 'react';
import CapabilityTemplate from "./CapabilityTemplate";

const SkillGroup = ({id, handleCollapse, label, onSave, skills, subsets}) => (
  <div className="employee-abilities">
    <div className="action-button">
      <h2>SKILLS & ABILITIES</h2>
      <div>
        <button
          className="edit-skill mr-2"
          onClick={handleCollapse}
        >
          {label}
        </button>
        <button
          className="edit-skill"
          onClick={onSave}
        >
          SAVE SKILLS & ABILITIES
        </button>
      </div>
    </div>
    <div className="rating">
      {
        subsets.map((subnet, i) => {
          return (
            <CapabilityTemplate
              key={i}
              skills={skills[subnet]}
              subset={subnet}
              id={id}/>
          );
        })
      }
    </div>
  </div>
);

export default SkillGroup;
