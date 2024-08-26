import { Link } from "react-router-dom";
import "./Header.css";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(0);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <nav className="main-nav">
        <h2><a href="/">Polar</a></h2>
        <div>
          <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <i class="fa-solid fa-xmark"></i>
            ) : (
              <i class="fa-solid fa-bars"></i>
            )}
          </div>
          <ul className={`nav-links ${isOpen ? "active" : ""} `}>
            <li>
              <Link className="a" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="a" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="a" to="/adventures">
                Adventures
              </Link>
            </li>
            <li>
              <Link className="a" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
