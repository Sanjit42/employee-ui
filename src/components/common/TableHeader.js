import React from 'react';
import Proptypes from 'prop-types';

const TableHeader = ({columns}) => {
  return (
    <thead>
      <tr>
        {
          columns.map((c, i) => <th key={i}>{c.label}</th>)
        }
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  columns: Proptypes.array.isRequired
};

export default TableHeader;
