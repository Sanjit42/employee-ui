/* eslint-disable import/default */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Avatar from '../avtar/Avatar';
import ProjectExperience from '../projectExperience/ProjectExperience';
import BasicDetails from '../basic/BasicDetails';

class ViewEmployee extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      employee: Object.assign({}, this.props.employee)
    };
  }

  render() {
    return (
      <div>
        <Avatar/>
        <BasicDetails basicDetails={this.state.employee.basicDetails}/>
        <ProjectExperience projectExperience={this.state.employee.projectExperience}/>
      </div>
    );
  }
}

ViewEmployee.propTypes = {
  employee: PropTypes.array.isRequired
};

function getEmployeeById(employees, id) {
  let filterEmployees = employees.filter(employee => employee.basicDetails.employeeId == id);
  if (filterEmployees) return filterEmployees[0];
}

function mapStateToProps(state, ownProps) {
  let employee = {name: "", employeeId: "", role: "", currentProject: ""};
  let id = ownProps.params.id;
  if (id && state.employees.length > 0) {
    employee = getEmployeeById(state.employees, id);
  }
  return {
    employee: employee
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployee);
