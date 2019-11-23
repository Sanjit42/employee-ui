import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// eslint-disable-next-line import/default
import TableHeader from '../../common/TableHeader';
// eslint-disable-next-line import/default
import TableBody from '../../common/TableBody';

const EmployeeTable = ({employees}) => {
  const columns = [
    {path: 'name', label: 'Name', content: employee => <Link to={`/employees/${employee.employeeId}`} > {employee.name} </Link>},
    {path: 'employeeId', label: 'Employee Id'},
    {path: 'gender', label: 'Gender'},
    {path: 'role', label: 'Role'},
    {path: 'homeOffice', label: 'Home Office'},
    {path: 'currentProject', label: 'Current Project'}
  ];
  return (
    <div>
      <table className="table">
        <TableHeader
          columns={columns}
        />
        <TableBody
          columns={columns}
          data={employees}
        />
      </table>
    </div>
  );
};

EmployeeTable.propTypes = {
  employees: PropTypes.array.isRequired
};

export default EmployeeTable;
