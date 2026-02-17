import React from "react";
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <a href="#about"><i className="fa-solid fa-address-card"></i> About</a>
        <a href="#projects"><i className="fa-solid fa-dumbbell"></i> Mijn Projects</a>
        <a href="#contact"><i className="fa-solid fa-comments"></i> Contact</a>
      </nav>
    </header>
  );
}

export default Header;
