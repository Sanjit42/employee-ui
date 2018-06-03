/* eslint-disable import/default */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Avatar from '../avtar/Avatar';
import ProjectExperience from '../projectExperience/ProjectExperience';
import BasicDetails from '../basic/BasicDetails';
import LeaveHistory from '../leaveHistory/LeaveHistory';
import SkillsAndAbilities from '../skillAndAbility/SkillsAndAbilities';

class ViewEmployee extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      employee: Object.assign({}, this.props.employee),
      id: this.props.id
    };
  }

  render() {
    let {employee} = this.state;
    return (
      <div>
        <Avatar id={this.state.id}/>
        <BasicDetails basicDetails={employee.basicDetails}/>
        <div>
          <SkillsAndAbilities skillsAndAbilities={employee.skillsAndAbilities} id={this.state.id}/>
        </div>
        <ProjectExperience projectExperience={employee.projectExperience}/>
        <LeaveHistory leaveHistory={employee.leaveHistory}/>
      </div>
    );
  }
}

ViewEmployee.propTypes = {
  employee: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
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
    employee: employee,
    id: id
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployee);
