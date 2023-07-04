import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/logo.webp";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wdL">What is DeLance?</a>
    </p>
    <p>
      <a href="#possibility">Early Access</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="dL__navbar">
      <div className="dL__navbar-links">
        <div className="dL__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dL__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="dL__navbar-sign">
        <button type="button">Sign Up</button>
      </div>
      <div className="dL__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="dL__navbar-menu_container scale-up-center">
            <div className="dL__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="dL__navbar-menu_container-links-sign">
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
