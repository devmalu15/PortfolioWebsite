import React from 'react';
import './Header.css';

const Header = ({ toggleTheme, currentTheme }) => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href="#">Dev Malu</a>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">My Work</a></li>
          <li><a href="#contact">Contact Me</a></li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle-button">{currentTheme === 'light' ? '🌙' : '☀️'}</button>
          </li>
          <li>
            <a href="/DevMalu_CSE_GLAU.pdf" target="_blank" rel="noopener noreferrer" className="cta-button">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;