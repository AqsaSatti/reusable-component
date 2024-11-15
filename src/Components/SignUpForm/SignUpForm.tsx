import React, { ChangeEvent, FormEvent, useState } from "react";
import { SignupProps } from "./SignUpForm.interface";
import "./SignUpForm.style.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {validateField} from "./Validations"

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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function handleInput(e: ChangeEvent<HTMLInputElement>): void {
    const name = e.target.name;
    const value = e.target.value;
    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    setData({ ...data, [name]: value });
  }

  const handleSumbit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault(); // Prevents the default form submission behavior (page reload)
    const newErrors = {
      username: validateField("username", data.username || ''),
      email: validateField("email", data.email || ''),
      phone: validateField("phone", data.phone || ''),
      password: validateField("password", data.password || ''),
    };

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    setErrors(newErrors);

    if (hasErrors) return;

    alert("Form submitted successfully!");
    const newRecord = { ...data, id: new Date().getTime().toString() } // Creating a new record by spreading the current form data and adding a unique 'id' field
    setRecords([...records, newRecord])
    setData({ username: "", email: "", phone: "", password: "", confirmPassword: "" }) // Resetting the form data after submission
  }

  return (
    <div className="form-container">
      <h2 className="form-heading">Sign Up</h2>
      <form action="" onSubmit={handleSumbit}>

        <div>
          <Input variant="outlined"
            placeholder="Username"
            label="Username"
            type="text"
            value={data.username}
            name="username"
            onChange={handleInput}
            autoComplete="off"
            startIcon="fa-regular fa-user" />
        </div>
        {errors.username && <p className="error-message">{errors.username}</p>}
        <div>
          <Input variant="outlined"
            placeholder="email"
            type="email"
            label="Email"
            value={data.email}
            name="email"
            onChange={handleInput}
            autoComplete="off"
            startIcon="fa fa-envelope" />
        </div>
        {errors.email && <p className="error-message">{errors.email}</p>}
        <div>
          <Input variant="outlined"
            placeholder="password"
            label="Password"
            name="password"
            type="password"
            value={data.password}
            onChange={handleInput}
            autoComplete="off"
            startIcon="fa-regular fa-lock" />
        </div>
        {errors.password && <p className="error-message">{errors.password}</p>}
        <div>
          <Input variant="outlined"
            placeholder="confirm password"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={data.confirmPassword}
            onChange={handleInput}
            autoComplete="off"
            startIcon="fa-regular fa-lock" />
        </div>
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        <div>
          <Input variant="outlined"
            placeholder="phone"
            type="text"
            label="Phone"
            name="phone"
            value={data.phone}
            onChange={handleInput}
            autoComplete="off"
            startIcon="fa fa-phone" />
        </div>
        {errors.phone && <p className="error-message">{errors.phone}</p>}

        <div className="btn-class"><Button variant="contained" size="medium" > Submit </Button></div>

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
