import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../../../actions/employeeActions';
import EmployeeList from './EmployeeList';

export class EmployeePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      employee: {}
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  redirectToAddEmployeePage() {
    browserHistory.push('/employee');
  }

  onTitleChange(event) {
    const employee = this.state.employee;
    employee.name = event.target.value;
    this.setState({employee: employee});
  }

  onClickSave() {
    this.props.actions.createEmployee(this.state.employee);
  }

  render() {
    const {employees} = this.props;
    return (
      <div>
        <h1>Employees</h1>
        <input
          type="submit"
          value="Add Employee"
          className="btn btn-primary"
          onClick={this.redirectToAddEmployeePage}
        />
        {employees.length > 0 && <EmployeeList employees={employees}/>}
      </div>
    );
  }
}

EmployeePage.propTypes = {
  actions: PropTypes.object.isRequired,
  employees: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    employees: state.employees
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);
