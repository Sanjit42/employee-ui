/* eslint-disable import/default */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Avatar from '../avtar/Avatar';
import ProjectExperience from '../projectExperience/ProjectExperience';
import BasicDetails from '../basic/BasicDetails';
import LeaveHistory from '../leaveHistory/LeaveHistory';
import SkillsAndAbilities from '../skillsAndAbilities/SkillsAndAbilities';
import * as defaultRating from '../skillsAndAbilities/defaultRating/defaultRating';

class ViewEmployee extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      employee: Object.assign({}, this.props.employee),
      skillsAndAbilities: Object.assign({}, this.props.skillsAndAbilities),
      id: this.props.id
    };
  }

  render() {
    let {state} = this;
    return (
      <div>
        <Avatar id={this.state.id}/>
        <BasicDetails basicDetails={state.employee}/>
        <SkillsAndAbilities skillsAndAbilities={state.skillsAndAbilities} id={state.id}/>
        {this.state.projectExperience != undefined &&
        <ProjectExperience projectExperience={state.employee.projectExperience}/>
        }
        {this.state.leaveHistory != undefined &&
        <LeaveHistory leaveHistory={state.employee.leaveHistory}/>
        }
      </div>
    );
  }
}

ViewEmployee.propTypes = {
  employee: PropTypes.array.isRequired,
  skillsAndAbilities: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
};

function getEmployeeById(element, id) {
  let filterEmployees = element.filter(each => each.employeeId == id);
  if (filterEmployees) return filterEmployees[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  let employee = {name: "", employeeId: "", role: "", currentProject: ""};
  let skillsAndAbilities = [];
  let id = ownProps.params.id;

  if (id && state.employees.length > 0) {
    employee = getEmployeeById(state.employees, id);
  }

  if (id && state.skillsAndAbilities.length > 0) {
    skillsAndAbilities = getEmployeeById(state.skillsAndAbilities, id);
  }
  if (skillsAndAbilities == undefined || skillsAndAbilities.length == 0) {
    skillsAndAbilities = defaultRating.skillsAndAbilities;
  }

  return {
    employee: employee,
    skillsAndAbilities: skillsAndAbilities,
    id: id
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployee);
