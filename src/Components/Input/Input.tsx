import React from 'react';
import { InputProps } from './Input.interface';
import './Input.style.css';

const Input: React.FC<InputProps> = ({
  variant = 'outlined',
  placeholder = '',
  label,
  value,
  onChange,
  type = 'text',
  disabled = false,
  required = false,
  defaultValue,
  error = false,
  errorMessage,
  startIcon,
  endIcon,
  className = ''
}) => {
  // Combine base class with variant class
  const inputClass = `input ${variant} ${error ? 'input-error' : ''} ${className && className} ${startIcon ? 'icon-spacing' : ''} `;
  const labelClass = `input-label ${error ? 'input-label-error' : ''}`;
  const iconClass = `start_icon ${disabled ? 'disabled-icon' : ''} `;
  return (
    // <div className="input-container">
    //   <label className={labelClass}>
    //     {placeholder}
    //     {required && <span className="required-asterisk">*</span>}
    //   </label>

    //   <div className='input-wrapper'>
    //     <div>
    //       {startIcon && className === "start-icon-outside" && (
    //         <span className="start-icon">
    //           {startIcon && <i className={`fa ${startIcon}`} />}
    //         </span>
    //       )}

    //       {startIcon && className === "start-icon-inside" && (
    //         <span className="start-icon">
    //           {startIcon && <i className={`fa ${startIcon}`} />}
    //         </span>
    //       )}
    //     </div>

    //     <div>
    //       <input
    //         className={inputClass}
    //         type={type}
    //         placeholder={placeholder} // Remove placeholder text if required
    //         value={value}
    //         onChange={onChange}
    //         disabled={disabled}
    //         required={required}
    //         defaultValue={defaultValue}
    //       />
    //     </div>

    //   </div>


    //   {error && <div className='error-text'>{errorMessage}</div>}


    // </div>

    <div className="input-container">
      <label className={labelClass} >
        {label}
        {required && <span className="required-asterisk">*</span>}
      </label>

      <div className='input-wrapper'>
      
          {startIcon && (
            <span className={iconClass}>
              {startIcon && <i className={`fa ${startIcon}`} />}
            </span>
          )}
          <input
            className={`${inputClass} `}
            type={type}
            placeholder={placeholder} // Remove placeholder text if required
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            defaultValue={defaultValue}
          />
          {endIcon && (
            <span className="end_icon">
              {endIcon && <i className={`fa ${endIcon}`} />}
            </span>
          )}
        {error && <p className='error-text'>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Input;
