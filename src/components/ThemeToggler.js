// src/components/ThemeToggle.js
import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./ThemeContext";

const ToggleButton = styled.button`
  background: ${(props) => props.theme.toggleBackground};
  color: ${(props) => props.theme.buttonText};
  border: none;
  border-radius: 10px;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);

  return (
    <ToggleButton theme={theme} onClick={toggleTheme}>
      {isDarkMode ? "☀️" : "🌙 "}
    </ToggleButton>
  );
};

export default ThemeToggle;
