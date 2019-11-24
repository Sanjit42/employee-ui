import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

const CapabilityTemplate = ({skills, subset, id}) => {
  let keys = Object.keys(skills);
  return (
    <div className="col-md-6">
      <h2>{subset}</h2>
        {keys.map((element, i) =>
          <div key={i}>
            {element}
            <Rating
              key={i}
              rating={skills[element]}
              topic={element}
              template={subset}
              id={id}
            />
          </div>
        )}
    </div>
  );
};

CapabilityTemplate.propTypes = {
  skills: PropTypes.object.isRequired,
  subset: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default CapabilityTemplate;
