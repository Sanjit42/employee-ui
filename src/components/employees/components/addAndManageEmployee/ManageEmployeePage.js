import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toaster from 'toastr';

import EmployeeForm from './EmployeeForm';
import * as employeeActions from '../../../../actions/employeeActions';
import * as defaultData from '../defaultData/defaultData';

export class ManageEmployeePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      employee: Object.assign({}, this.props.employee),
      errors: {},
      saving: false
    };

    this.updateEmployeeState = this.updateEmployeeState.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  updateEmployeeState(event) {
    const field = event.target.name;
    let employee = this.state.employee;
    employee[field] = event.target.value;
    return this.setState({employee: employee});
  }

  redirect() {
    this.setState({saving: false});
    toaster.success('Employee Saved!');
    this.props.history.push('/employee-list');
  }

  saveEmployee(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveEmployee(this.state.employee)
      .then(() => this.redirect())
      .catch(error =>{
        toaster.error(error);
        this.setState({saving: false});
      });
  }

  render() {
    return (
      <div>
        <EmployeeForm
          homeOffices={this.props.homeOffices}
          gender={this.props.gender}
          onChange={this.updateEmployeeState}
          onSave={this.saveEmployee}
          employee={this.state.employee}
          errors={this.state.errors}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

ManageEmployeePage.propTypes = {
  actions: PropTypes.object.isRequired,
  employee: PropTypes.object.isRequired,
  homeOffices: PropTypes.array.isRequired,
  gender: PropTypes.array.isRequired,
  history: PropTypes.object
};

ManageEmployeePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, omeProps) {
  let employee = defaultData.employee;
  return {
    employee: employee,
    homeOffices: state.homeOffices,
    gender: state.gender
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEmployeePage);
