import React, {PropTypes} from 'react';

import Rating from '../common/Rating';

const Testing = ({testing, rating}) => {

  function getElement(testFramework, rating) {
    let filterTesting = rating.filter(each => each.testing === testFramework);
    return filterTesting[0];
  }

  return (
    <div>
      <h2>Testing</h2>
      <form>
        {testing.map(testFramework =>
          <div>
            {testFramework}
            <Rating
              title={testFramework}
              rating={getElement(testFramework, rating)}
            />
          </div>
        )}
      </form>
    </div>
  );
};

Testing.propTypes = {
  testing: PropTypes.array.isRequired,
  rating: PropTypes.number
};

export default Testing;
