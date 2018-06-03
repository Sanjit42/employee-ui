import React, {PropTypes} from 'react';
import Rating from './Rating';

const SkillsAndAbilities = ({skillsAndAbilities, id}) => {
  let template = Object.keys(skillsAndAbilities)[0];
  let values = Object.values(skillsAndAbilities)[0];
  return (
    <div>
      <h2>{template}</h2>
        {values.map(element =>
          <div>
            {Object.keys(element)}
            <Rating
              rating={element}
              template={template}
              id={id}
            />
          </div>
        )}
    </div>
  );
};

SkillsAndAbilities.propTypes = {
  skillsAndAbilities: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default SkillsAndAbilities;
