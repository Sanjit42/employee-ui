import React, {PropTypes} from 'react';

const SelectInput = ({name, lavel, value, defaultOption, options, onChange, error}) => {
  return (
    <div className="form-group">
      <lavel htmlFor={name}>{lavel}</lavel>
      <div className="field">
        <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control">
        <option value="">{defaultOption}</option>
          {options.map((option) => {
            return <option key={option} value={option}>{option}</option>;
          })
          }
        </select>
        {error && <div className="alert alert-danger"></div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  lavel: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultOption: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
