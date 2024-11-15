
import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export interface InputProps {
  variant?: 'outlined' | 'filled' | 'underlined' | 'rounded' ; 
  placeholder?: string; 
  label?: string; 
  value?: string;
  name?: string;
  autoComplete?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute; // Support for different input types (text, password, etc.)
  // type?: 'text' | 'password' | 'number';
  disabled?: boolean;
  required?: boolean; // For required input fields
  defaultValue?: string;
  // pattern?: string; // For regex pattern validation
  fullWidth?: boolean; // Optional prop to make the input full-width
  error?: boolean;
  errorMessage?: string;
  startIcon?:string;
  endIcon?:string;
  className?:string;
}