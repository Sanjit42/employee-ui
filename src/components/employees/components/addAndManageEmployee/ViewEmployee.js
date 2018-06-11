/* eslint-disable import/default */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {bindActionCreators} from 'redux';

import Avatar from '../avtar/Avatar';
import ProjectExperience from '../projectExperience/ProjectExperience';
import BasicDetails from '../basic/BasicDetails';
import LeaveHistory from '../leaveHistory/LeaveHistory';
import SkillsAndAbilities from '../skillsAndAbilities/SkillsAndAbilities';
import * as defaultData from '../defaultData/defaultData';
import * as employeeActions from '../../../../actions/employeeActions';

class ViewEmployee extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      employee: Object.assign({}, this.props.employee),
      avatar: Object.assign({}, this.props.avatar),
      skillsAndAbilities: Object.assign({}, this.props.skillsAndAbilities),
      id: this.props.id
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.avatar.employeeId !== nextProps.avatar.employeeId) {
      this.setState({avatar: nextProps.avatar});
    }
    if (this.props.employee.employeeId !== nextProps.employee.employeeId) {
      this.setState({employee: nextProps.employee});
    }
    if (this.props.skillsAndAbilities.employeeId !== nextProps.skillsAndAbilities.employeeId) {
      this.setState({skillsAndAbilities: nextProps.skillsAndAbilities});
    }
  }

  render() {
    let {props} = this;
    return (
      <div>
        <Avatar avatar={props.avatar} id={props.id}/>
        <BasicDetails basicDetails={props.employee}/>
        <SkillsAndAbilities skillsAndAbilities={props.skillsAndAbilities} id={props.id}/>
        {props.employee.projectExperience !== undefined &&
        <ProjectExperience projectExperience={props.employee.projectExperience}/>
        }
        {props.employee.leaveHistory !== undefined &&
        <LeaveHistory leaveHistory={props.employee.leaveHistory}/>
        }
      </div>
    );
  }
}

ViewEmployee.propTypes = {
  employee: PropTypes.object.isRequired,
  skillsAndAbilities: PropTypes.object.isRequired,
  avatar: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  let employee = defaultData.employee;
  let skillsAndAbilities = null;
  let avatar = null;
  let id = parseInt(ownProps.params.id);

  if (id && state.avatar.length > 0) {
    avatar = _.find(state.avatar, {employeeId: parseInt(id)});
  }
  if (id && state.employees.length > 0) {
    employee = _.find(state.employees, {employeeId: parseInt(id)});
  }

  if (id && state.skillsAndAbilities.length > 0) {
    skillsAndAbilities = _.find(state.skillsAndAbilities, {employeeId: parseInt(id)});
  }
  if (skillsAndAbilities == undefined) {
    skillsAndAbilities = defaultData.skillsAndAbilities;
  }

  if (avatar == undefined) {
    avatar = defaultData.avatar;
  }

  return {
    employee: employee,
    avatar: avatar,
    skillsAndAbilities: skillsAndAbilities,
    id: id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployee);
