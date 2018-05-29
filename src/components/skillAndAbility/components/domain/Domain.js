import React, {PropTypes} from 'react';

import Rating from '../common/Rating';

const Domain = ({domain, rating}) => {

  function getElementBy(eachDomain, rating) {
    let filterDomain = rating.filter(each => each.domain === eachDomain);
    return filterDomain[0];
  }

  return (
    <div>
      <h2>Domain</h2>
      {domain.map(each =>
        <div>
          {each}
          <Rating
            title={each}
            rating={getElementBy(each, rating)}
          />
        </div>
      )}
    </div>
  );
};

Domain.propTypes = {
  domain: PropTypes.array.isRequired,
  rating: PropTypes.number
};

export default Domain;
