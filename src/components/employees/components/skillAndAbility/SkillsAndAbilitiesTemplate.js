import React, {PropTypes} from 'react';
import Rating from './Rating';

const SkillsAndAbilities = ({skillsAndAbilities}) => {
  let template = Object.keys(skillsAndAbilities)[0];
  let values = Object.values(skillsAndAbilities)[0];
  return (
    <div>
      <h2>{template}</h2>
        {values.map(element =>
          <div>
            {Object.keys(element)}
            <Rating
              title={element}
              template={skillsAndAbilities}
            />
          </div>
        )}
    </div>
  );
};

SkillsAndAbilities.propTypes = {
  skillsAndAbilities: PropTypes.object.isRequired,
  rating: PropTypes.number
};

export default SkillsAndAbilities;
