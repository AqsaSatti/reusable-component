import React, { ChangeEvent, FormEvent, useState } from "react";
import { SignupProps } from "./SignUpForm.interface";
import "./SignUpForm.style.css";

interface Record extends SignupProps {
  id: string;
}

const SignUpForm: React.FC<SignupProps> = () => {
 
  const [data, setData] = useState<SignupProps>({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [records, setRecords] = useState<Record[]>([]);
  const [error, setError] = useState<string>("");

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setData({...data, [name]: value})
  };

  const  handleSumbit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault(); // Prevents the default form submission behavior (page reload)

    if (!data.username || !data.email || !data.phone || !data.password) {
      setError("All fields are required.");
      return; // Prevent form submission if any field is empty
    }
    if(data.username.length < 3){
      setError("Enter at least 3 characters for the username")
      return;
    }
    if (data.password && !validatePassword(data.password)) {
      setError("Password must be at least 6 characters long and contain at least one uppercase letter, one number, and one special character.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailRegex.test(data.email)) {
      setError("Please enter a valid email address.");
      return;
    }
  
    setError(""); 

    const newRecord = {...data, id:new Date().getTime().toString()} // Creating a new record by spreading the current form data and adding a unique 'id' field
    setRecords([...records,newRecord ])
    setData({username: "", email: "", phone:"", password: "", confirmPassword:""}) // Resetting the form data after submission
  }

  return (
    <div className="form-container">
      <h2 className="form-heading">Sign Up</h2>
      <form action="" onSubmit={handleSumbit}>
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={data.username}
            id="name"
            onChange={handleInput}
            autoComplete="off"
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            id="email"
            onChange={handleInput}
            autoComplete="off"
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            id="password"
            onChange={handleInput}
            autoComplete="off"
          />
        </div>
        <div className="input-field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            id="confirmPassword"
            onChange={handleInput}
            autoComplete="off"
          />
        </div>
        <div className="input-field">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            value={data.phone}
            id="phone"
            onChange={handleInput}
            autoComplete="off"
          />
        </div>
        {error && <p className="error-message">{error}</p>} 
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
      <div>
        {records.map((currElem) => {
          return (
            <div key={currElem.id} className="record">
              <p><strong>Username:</strong> {currElem.username}</p>
              <p><strong>Email:</strong> {currElem.email}</p>
              <p><strong>Phone:</strong> {currElem.phone}</p>
              <p><strong>Password:</strong> {currElem.password}</p>
            </div>
          );
        })}
      </div>
    </div>
   
  );
};

export default SignUpForm;
