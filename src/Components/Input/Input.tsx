import React from 'react';
import { InputProps } from './Input.interface';
import './Input.style.css';

const Input: React.FC<InputProps> = ({
  variant = 'outlined',
  placeholder = '',
  value,
  onChange,
  type = 'text',
  disabled = false,
  required = false,
  defaultValue,
  fullWidth = false,
  error = false,
  errorMessage,
  startIcon,
  className=''
}) => {
  // Combine base class with variant class
  const inputClass = `input ${variant} ${fullWidth ? 'full-width' : ''}  ${error ? 'input-error' : ''} ${className && className}`;
  const labelClass = `input-label ${error ? 'input-label-error' : ''}`;
  return (
    <div className="input-container">
      <label className={labelClass}>
        {placeholder}
        {required && <span className="required-asterisk">*</span>}
      </label>
      <div>
      {startIcon && (
        <span className="start-icon">
          {startIcon && <i className={`fa ${startIcon}`} />}
        </span>
      )}
        <input
          className={inputClass}
          type={type}
          placeholder={placeholder} // Remove placeholder text if required
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          defaultValue={defaultValue}
        />
        {error && <div className='error-text'>{errorMessage}</div>}
      </div>

    </div>
  );
};

export default Input;
