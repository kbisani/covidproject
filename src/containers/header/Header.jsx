import React from "react";
import "./Header.css";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    
    <div className="dL__header section__padding" id="home">
      <div className="dL__header-content">
        <h1 className="gradient__text">A Decentralized Freelancing Platform</h1>
        <p>Convenient, Efficient, Trustless.</p>

        <div className="dL__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

      </div>

      <div className="dL__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
