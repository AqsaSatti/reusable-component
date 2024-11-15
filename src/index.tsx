import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InputTest from './InputComponent';
import SignUp from "./Components/SignUpForm/SignUpForm";
import SignUp2 from "./Components/SignUpForm/SignUpFormWithoutUsingComponent"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/input" element={<InputTest />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/SignUp2" element={<SignUp2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
