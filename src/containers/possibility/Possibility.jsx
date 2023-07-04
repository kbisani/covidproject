
import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './Possibility.css';

const Possibility = () => (
  <div className="dL__possibility section__padding" id="possibility">
    <div className="dL__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="dL__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Join our priority list to receive updates and be the first to use our product. Take advantage and build credibility on the platform early.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;