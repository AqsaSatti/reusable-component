export interface SignupProps{
  username?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  handleInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}