import React from "react";

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header className="navigation">
      <h1 className="branding">
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <nav>
        <a className="button" href="/projects">
          All Projects
        </a>
        <a className="button" href="/projects/new">
          Add Project
        </a>
        <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
      </nav>
    </header>
  );
};

export default Header;
