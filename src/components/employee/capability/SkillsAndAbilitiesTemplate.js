import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

const SkillsAndAbilities = ({skillsAndAbilities, subset, id}) => {
  let keys = Object.keys(skillsAndAbilities);
  return (
    <div className="col-md-6">
      <h2>{subset}</h2>
        {keys.map((element, i) =>
          <div>
            {element}
            <Rating
              key={i}
              rating={skillsAndAbilities[element]}
              topic={element}
              template={subset}
              id={id}
            />
          </div>
        )}
    </div>
  );
};

SkillsAndAbilities.propTypes = {
  skillsAndAbilities: PropTypes.object.isRequired,
  subset: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default SkillsAndAbilities;
