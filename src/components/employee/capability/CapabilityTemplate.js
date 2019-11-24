import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

const skillItems = {
  technical: 'Technical',
  consulting: 'Consulting',
  domain: 'Domain',
  baAndXd: 'BA & XD',
  language: 'Language',
  testing: 'Testing'
};

const CapabilityTemplate = ({skills, subset, id}) => {
  let keys = Object.keys(skills);
  return (
      <div className="rating-group">
        <h3>{skillItems[subset]}</h3>
        <div className="body">
          {keys.map((element, i) =>
            <li className="rating-item" key={i}>
              <div>{element}</div>
              <Rating
                key={i}
                rating={skills[element]}
                topic={element}
                template={subset}
                id={id}
              />
            </li>
          )}
        </div>
      </div>
  );
};

CapabilityTemplate.propTypes = {
  skills: PropTypes.object.isRequired,
  subset: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default CapabilityTemplate;
