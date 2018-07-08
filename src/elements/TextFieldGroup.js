import React from 'react';
import classnames from 'classnames';
import PropType from 'prop-types';
const TextFieldGroup = ({ field, value, label, error, type, onChange }) => {
  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      <label className="control-label">{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={field}
        className="form-control"
      />
    {error && <span className="help-block">{error}</span>}
    </div>  );
}

TextFieldGroup.propTypes = {
  field: PropType.string.isRequired,
  value: PropType.string.isRequired,
  label: PropType.string.isRequired,
  error: PropType.string,
  type: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
 
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
