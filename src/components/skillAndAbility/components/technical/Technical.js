import React, {PropTypes} from 'react';

import Rating from '../common/Rating';

const Technical = ({technical, rating}) => {

  function getElementByTech(tech, ratingTech) {
    let filterTech = ratingTech.filter(ratedTech => ratedTech.technical === tech);
    return filterTech[0];
  }

  return (
    <div>
      <h2>Technical</h2>
      {technical.map(tech =>
        <div>
          {tech}
          <Rating
            title={tech}
          rating={getElementByTech(tech, rating)}
          />
        </div>
      )}
    </div>
  );
};

Technical.propTypes = {
  technical: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired
};

export default Technical;
