import React, {PropTypes} from 'react';

import Rating from '../common/Rating';

const Consulting = ({consulting, rating}) => {

  function getElementBy(eachConsulting, rating) {
    let filterConsulting = rating.filter(each => each.consulting === eachConsulting);
    return filterConsulting[0];
  }

  return (
    <div>
      <h2>Consulting</h2>
      {consulting.map(eachConsulting =>
        <div>
          {eachConsulting}
          <Rating
            title={eachConsulting}
            rating={getElementBy(eachConsulting, rating)}
          />
        </div>
      )}
    </div>
  );
};

Consulting.propTypes = {
  consulting: PropTypes.array.isRequired,
  rating: PropTypes.number
};

export default Consulting;
