import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';
import Sum from './Sum';
import Input from './Components/Input/Input'
import Button from './Components/Button/Button'

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText(/Variants/i);
});

test('button click', () => {
  render(<Button />);
  const button = screen.getByTestId('btn-id');

  fireEvent.click(button)
  expect(onclick).toHaveBeenCalledTimes(1)
});

// *********Sum Function TEsting*************
// test("testing for sum function", ()=>{
//   expect(Sum(10,2)).toBe(12)
// })

test("testing input", () => {

  render(<Input />);
  let checkInput = screen.getByRole("textbox") as HTMLInputElement
  // let checkInputPlaceHolder  = screen.getByPlaceholderText("nnn")
  expect(checkInput).toBeInTheDocument();
  // expect(checkInput).toHaveAttribute("nawme");
  fireEvent.change(checkInput, { target: { value: "abc" } })
  expect(checkInput.value).toBe("abc");
})

// test("click event test case", () => {
//   render(<Button />);
//   const btn = screen.getByRole("button")
//   fireEvent.click(btn)
//   expect(screen.getByText("text")).toBeInTheDocument();
// })

// ********************Describe Function************
describe.only("UI test case group1", ()=>{
  test("testting....", ()=>{
    render(<Input/>);
    let checkInput  = screen.getByRole("textbox")
    expect(checkInput).toBeInTheDocument();
  })
  test("testing for sum function", ()=>{
    expect(Sum(10,2)).toBe(12)
  })
})

describe.skip("UI test case group2", ()=>{
  test("testing for sum function", ()=>{
    expect(Sum(10,2)).toBe(12)
  })
})

//*****************Making SnapShots***************
//  test("snapshot for app component", ()=>{
//   const container = render(<App/>)
//     expect(container).toMatchSnapshot()
//   })