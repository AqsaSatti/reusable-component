import logo from "./logo.svg";
import React from "react";
import Button from "./Components/Button/Button";
import Icon from "./Components/Icon";
import "./App.css";
 

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <h1>Reuseable Component</h1>
//       {/* <Button style={{backgroundColor: 'green', color: 'red'}} onClick={()=>{alert('button1 is clicked')}}>click me 1</Button> */}
//       <br></br>
//       {/* <Button onClick={()=>{alert('button2 is clicked')}}><h1>click me 2</h1></Button> */}
//       {/* <TextInput></TextInput> */}
//       <button></button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Reusable Button Component</h1>

//       {/* Primary Variant */}
//       <Button variant="primary" onClick={() => alert('Primary button clicked')}>
//         Primary
//       </Button>

//       {/* Secondary Variant */}
//       <Button variant="secondary" onClick={() => alert('Secondary button clicked')}>
//         Secondary
//       </Button>

//       {/* Danger Variant */}
//       <Button variant="danger" onClick={() => alert('Danger button clicked')}>
//         Danger
//       </Button>

//       {/* Disabled Button */}
//       <Button variant="primary" disabled>
//         Disabled
//       </Button>
//     </div>
//   );
// }

function App() {
  return (
    <div className="container">
      <h1 className="mt-5">Variants</h1>

      {/* <Button variant="primary" onClick={() => alert("Primary button clicked")}>
        Primary
      </Button>
      <Button variant="secondary" onClick={() => alert("Secondary button clicked")}>
        Secondary
      </Button>
      <Button variant="success" onClick={() => alert("Success button clicked")}>
        Success
      </Button> */}
      {/* /////////////////////////////////////////// */}
      <br></br>
      <div className="d-flex flex-column ">
        <Button variant="contained" size="small" onClick={() => alert("contained button clicked")}> Contained </Button>

        <Button  disabled size="medium" onClick={() => alert("disabled button clicked")}> Disabled </Button>

        <Button variant="link" href="#" size="small" > Link </Button>
        <Button variant="outlined" size="large" onClick={() => alert("outlined button clicked")}> Outlined </Button>

        {/* <Button startIcon={<i className="fa fa-trash "></i>} size="medium" onClick={() => alert("delete button clicked")}> Delete </Button> */}

        <Button startIcon={"fa-trash"}> Delete </Button>

        <Button variant="send" endIcon={"fa-paper-plane"}> Send </Button>

        <Button color = "red" > Error </Button>
        <Button color = "green" > Success </Button>
        {/* <Icon iconName = "fa-trash"></Icon> */}
        
      </div>
    </div>
  );
}

export default App;
