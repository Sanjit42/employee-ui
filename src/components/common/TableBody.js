import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const renderCell = (item, column) => {
  if (column.content) return column.content(item);
  return _.get(item, column.path);
};

const TableBody = ({columns, data}) => {
  return (
    <tbody>
    {data.map(item =>
      <tr key={item.employeeId}>
        {
          columns.map((c, i) => (<th key={i}>{renderCell(item, c)}</th>))
        }
      </tr>
    )}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default TableBody;




