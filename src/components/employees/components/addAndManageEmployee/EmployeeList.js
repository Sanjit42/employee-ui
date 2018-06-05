import React, {PropTypes} from 'react';
import EmployeeListRow from './EmployeeListRow';

const EmployeeList = ({employees}) => {
  return (
    <div>
      <table className="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Employee Id</th>
          <th>Role</th>
          <th>Current Project</th>
          <th>Home Office</th>
        </tr>
        </thead>
        <tbody>
        {employees.map((employee, i) =>
          <EmployeeListRow key={i} employee={employee}/>
        )}
        </tbody>
      </table>
    </div>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired
};

export default EmployeeList;
