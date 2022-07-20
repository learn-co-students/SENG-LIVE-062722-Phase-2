import React from "react";

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  
  const handleToggleDarkModeClick = (e) => {
    onToggleDarkMode();
  }
  
  const darkModeButtonText = isDarkMode ? "Light Mode" : "Dark Mode"

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggleDarkModeClick}>{darkModeButtonText}</button>
    </header>
  );
}

export default Header;
