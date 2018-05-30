import React, {PropTypes} from 'react';

import Rating from '../common/Rating';

const Technical = ({technical}) => {
  return (
    <div>
      <h2>Technical</h2>
      {technical.map(tech =>
        <div>
          {tech}
          <Rating/>
        </div>
      )}
    </div>
  );
};

Technical.propTypes = {
  technical: PropTypes.array.isRequired
};

export default Technical;
