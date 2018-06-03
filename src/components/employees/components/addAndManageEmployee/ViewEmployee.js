/* eslint-disable import/default */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Avatar from '../avtar/Avatar';
import ProjectExperience from '../projectExperience/ProjectExperience';
import BasicDetails from '../basic/BasicDetails';
import LeaveHistory from '../leaveHistory/LeaveHistory';
import SkillsAndAbilities from '../skillAndAbility/SkillsAndAbilities';
import TechnicalSkills from '../skillAndAbility/TechnicalSkills';

class ViewEmployee extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      employee: Object.assign({}, this.props.employee),
      id: this.props.id,
      consulting: Object.assign([], this.props.consulting),
      domain: Object.assign([], this.props.domain),
      testing: Object.assign([], this.props.testing),
      technical: Object.assign([], this.props.technical)
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
  id: PropTypes.string.isRequired,
  testing: PropTypes.array,
  technical: PropTypes.array,
  domain: PropTypes.array,
  consulting: PropTypes.array
};

function getEmployeeById(employees, id) {
  let filterEmployees = employees.filter(employee => employee.basicDetails.employeeId == id);
  if (filterEmployees) return filterEmployees[0];
}

function getSkillsById(skills, id) {
  let filterSkills = skills.filter(skill => skill.employeeId == id);
  if (filterSkills.length > 0) return filterSkills[0].skills;
}

function mapStateToProps(state, ownProps) {
  let employee = {name: "", employeeId: "", role: "", currentProject: ""};
  let id = ownProps.params.id;
  if (id && state.employees.length > 0) {
    employee = getEmployeeById(state.employees, id);
  }

  let technical = getSkillsById(state.technical, id);
  let testing = getSkillsById(state.testing, id);
  let domain = getSkillsById(state.domain, id);
  let consulting = getSkillsById(state.consulting, id);

  return {
    employee: employee,
    id: id,
    consulting: consulting,
    domain: domain,
    testing: testing,
    technical: technical
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployee);
