import React from 'react';
import CapabilityTemplate from "./CapabilityTemplate";

const ExpandSkillSet = ({id, handleCollapse, label, onSave, skills, subsets}) => (
  <div className="expand-skill-set">
    <div className="action-button">
      <h2>SKILLS & ABILITIES</h2>
      <div>
        <button
          className="edit-skills mr-2"
          onClick={handleCollapse}
        >
          {label}
        </button>
        <button
          className="edit-skills"
          onClick={onSave}
        >
          SAVE SKILLS & ABILITIES
        </button>
      </div>
    </div>
    <div className="collapse show">
      <ul className="rating">
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
      </ul>
    </div>
  </div>
);

export default ExpandSkillSet;
