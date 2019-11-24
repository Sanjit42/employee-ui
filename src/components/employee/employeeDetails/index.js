/* eslint-disable import/default */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import {bindActionCreators} from 'redux';

import Avatar from '../avtar/Avatar';
import BasicDetails from '../basicDetails';
import Capability from '../capability';
import * as defaultData from '../defaultData';
import * as employeeActions from '../../../actions/employeeActions';

class ViewEmployee extends React.Component {

  render() {
    let {avatar, employee, skills, id} = this.props;
    return (
      <React.Fragment>
        <div className="profile">
          <Avatar avatar={avatar} id={id}/>
          <BasicDetails basicDetails={employee}/>
        </div>
        <Capability skills={skills} id={id}/>
      </React.Fragment>
    );
  }
}

ViewEmployee.propTypes = {
  employee: PropTypes.object.isRequired,
  skills: PropTypes.object.isRequired,
  avatar: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  let employee = defaultData.employee;
  let skills = null;
  let avatar = null;
  let id = parseInt(ownProps.match.params.id);

  if (id && state.avatar.length > 0) {
    avatar = _.find(state.avatar, {employeeId: id});
  }
  if (id && state.employees.length > 0) {
    employee = _.find(state.employees, {employeeId: id});
  }

  if (id && state.skills.length > 0) {
    skills = _.find(state.skills, {employeeId: id});
  }
  if (skills == undefined) {
    skills = defaultData.skills;
  }

  if (avatar == undefined) {
    avatar = defaultData.avatar;
  }

  return {
    employee,
    avatar,
    skills,
    id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployee);
