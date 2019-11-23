import React from 'react';

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

export default TableHeader;
