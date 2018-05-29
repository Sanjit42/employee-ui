import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Avatar from '../avtar/Avatar';
import SkillsAndAbilities from '../skillAndAbility/components/common/SkillsAndAbilities';

class ViewEmployee extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      employee: Object.assign({}, this.props.employee),
      technical: ''
    };
  }

  render() {
    let {employee} = this.state;
    return (
      <div>
        <Avatar/>
        <div>{employee.name}</div>
        <div>{employee.gender}</div>
        <span>ID: {employee.employeeId}</span>
        <span> PROFESSIONAL SERVICES</span>
        <div>{employee.role}</div>
        <div>{employee.currentProject}</div>
        <div>{employee.homeOffice}</div>
        <div>
          <SkillsAndAbilities/>
        </div>
      </div>
    );
  }
}

ViewEmployee.propTypes = {
  employee: PropTypes.array.isRequired,
  technical: PropTypes.array.isRequired
};

function getEmployeeByName(employees, name) {
  let filterEmployees = employees.filter(employee => employee.name == name);
  if (filterEmployees) return filterEmployees[0];
}

function mapStateToProps(state, ownProps) {
  let employee = {name: "", employeeId: "", role: "", currentProject: ""};
  let name = ownProps.params.id;
  if (name && state.employees.length > 0) {
    employee = getEmployeeByName(state.employees, name);
  }
  return {
    employee: employee,
    technical: state.technical
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployee);
