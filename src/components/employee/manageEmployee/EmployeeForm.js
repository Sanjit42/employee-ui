import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../common/TextInput';
import SelectInput from '../../common/SelectInput';

const EmployeeForm = ({employee, homeOffices, gender, errors, onChange, saving, onSave}) => {
  return (
    <form>
      <TextInput
        name="name"
        label="Full Name"
        value={employee.name}
        onChange={onChange}
        errors={errors}
      />

      <TextInput
        name="role"
        label="Role"
        value={employee.role}
        onChange={onChange}
        errors={errors}
      />

      <TextInput
        name="currentProject"
        label="Current Project"
        value={employee.currentProject}
        onChange={onChange}
        errors={errors}
      />

      <SelectInput
        name="homeOffice"
        label="Home Office"
        value={employee.homeOffice}
        defaultOption="Select Home Office"
        options={homeOffices}
        onChange={onChange}
        errors={errors}
      />

      <SelectInput
        name="gender"
        label="Gender"
        value={employee.gender}
        defaultOption="Select Gender"
        options={gender}
        onChange={onChange}
        errors={errors}
      />

      <input
        name="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

EmployeeForm.propTypes = {
  homeOffices: PropTypes.array.isRequired,
  employee: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  gender: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};

export default EmployeeForm;
