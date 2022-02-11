import "./Header.css";
import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <a href="https://www.podpisnie.ru/" target="blank"><div className="header__logo"></div></a>
        <p className="header__text">x</p>
        <p className="header__text header__text_style">heartbrokenclub</p>
      </div>
    </header>
  );
}

export default Header;
