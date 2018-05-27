import React, {PropTypes} from 'react';

const TextInput = ({name, lavel, onChange, placeholder, value, error})=>{
  let wrapperClass = 'form-group';
  if(error && error.length >0){
    wrapperClass += ''+'has error';
  }
  return (
    <div className={wrapperClass}>
      <lavel htmlForm={name}>{lavel}</lavel>
      <div className="field">
        <input
        type="text"
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  lavel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.object
};

export default TextInput;
