// src/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const lightTheme = {
  background: "#f4f4f4",
  text: "#333",
  primary: "#356287",
  secondary: "#358776",
  accent: "#9c573b",
  border: "#ccc",
  inputBackground: "#fff",
  buttonText: "#fff",
  primaryHover: "#4a85b9",
  codeBackground: "#e8e8e8",
  toggleBackground: "#2d2d2d",
  codeText: "#333",
};

const darkTheme = {
  background: "#1e1e1e",
  text: "#d4d4d4",
  primary: "#569cd6",
  secondary: "#4ec9b0",
  accent: "#ce9178",
  border: "#333",
  inputBackground: "#2d2d2d",
  buttonText: "#000",
  primaryHover: "#78b0e6",
  codeBackground: "#2d2d2d",
  toggleBackground: "#e8e8e8",
  codeText: "#d4d4d4",
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
