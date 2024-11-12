import React from 'react';
import './Button.style.css'
import { ButtonProps } from './Button.interface';

// export interface ButtonProps {
//   label: string;
//   variant?: 'contained' | 'outlined' | 'link' | 'delete' | 'send'; // Variants defined as specific options
//   size?: 'small' | 'medium' | 'large';
//   disabled?: boolean;
//   onClick?: () => void;
// }

const Button = ({ variant = "contained", onClick, children, size, startIcon, endIcon, disabled = false, color = '' }: ButtonProps) => {

  return (
    <button

      className={`${variant} ${size} ${color}`}
      onClick={onClick}
      disabled={disabled}
    >
      {/* {variant === "delete" && <i class="fa fa-trash " ></i>}
      {variant === "send" && <i class="fa fa-paper-plane icon-spacing" ></i>} */}

      {startIcon && (
        <span className="start-icon-button">
          {startIcon && <i className={`fa ${startIcon}`} />}
        </span>
      )}
      {children}
      {endIcon && (
        <span className='end-icon-button'>
          <i className={`fa ${endIcon}`} />
        </span>
      )}
    </button>
  );
}

export default Button;
