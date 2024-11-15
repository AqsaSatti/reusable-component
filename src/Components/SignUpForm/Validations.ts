import React from "react";

 const validatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
  return passwordRegex.test(password);
};

  const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\d{11}$/; // Validates an 11-digit phone number
  return phoneRegex.test(phone);
};

export const validateField = (name: string, value: string): string => {
  let error = "";
  if (name === "username" && value.length < 3) {
    error = "Enter at least 3 characters for the username.";
  } else if (name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) error = "Please enter a valid email address.";
  } else if (name === "phone" && !validatePhone(value)) {
    error = "Please enter a valid 11-digit phone number.";
  } else if (name === "password" && !validatePassword(value)) {
    error = "Password must be at least 6 characters, include an uppercase letter, a number, and a special character.";
  }
  return error;
};
