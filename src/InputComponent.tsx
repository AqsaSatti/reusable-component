import { ChangeEvent, useState } from "react";
import Input from "./Components/Input/Input";

function InputTest() {
  const [inputValue, setInputValue] = useState("");
  // const [inputPassword, setInputPassword] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setInputValue(e.target.value);
    console.warn("Input value:", e.target.value);
  }

  return (
    <div className="container mb-5">
      <h5 className="mt-5">Basic TextField</h5>
      <div className="d-flex flex-column gap-3 ">
        <Input variant="outlined" placeholder="Outlined Input" />
        <Input
          variant="filled"
          placeholder="Username"
          value={inputValue}
          onChange={handleChange}
          startIcon = "fa-regular fa-user"
        />
        <Input variant="underlined" placeholder="Underlined Input" />
        <Input variant="filled" placeholder="Disabled" disabled />
        <Input variant="rounded" placeholder="Rounded" />
        <Input placeholder="FullWidth" fullWidth />
      </div>

      {/* ////////////////////////////////////////////////////// */}
      <h5 className="mt-5">Form Props</h5>
      <div className="d-flex flex-column gap-3 ">
        <Input
          variant="outlined"
          type="password"
          placeholder="Password"
          startIcon="fa-regular fa-lock"
          // value={inputValue}
          // onChange={handleChange}
        />
        <Input variant="filled" type="number" placeholder="Number" />
        <Input variant="outlined" placeholder="Required Field" required />
        <Input variant="filled" defaultValue="Default Value" />
      </div>
      {/* ////////////////////////////////////////////////////// */}
      <h5 className="mt-5">Validations</h5>
      <div className="d-flex flex-column gap-3 ">
        <Input placeholder="Error" error errorMessage="some error" />
      </div>
      {/* ////////////////////////////////////////////////////// */}
      <h5 className="mt-5">Types</h5>
      <div className="d-flex flex-column gap-3 ">
        <Input placeholder="Button" type="button" />
        <Input placeholder="date" type="date" />
        <Input placeholder="email" type="email" />
        <Input placeholder="color" type="color" />
        <Input placeholder="file" type="file" />
        <Input placeholder="time" type="time" />
        <Input placeholder="week" type="week" />
      </div>
    </div>
  );
}

export default InputTest;

//////////////////////////////////////////////////////////////////////////
/*
 ChangeEvent is a built-in TypeScript type for change events (usually for <input>, <textarea>, or <select> elements)
 <HTMLInputElement> specifies that the e.target will be an HTMLInputElement (i.e., an input field) 
 */
