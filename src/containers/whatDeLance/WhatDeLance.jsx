import React from "react";
import Feature from "../../components/feature/Feature";
import "./WhatDeLance.css";

const WhatDeLance = () => {
  return (
    <div className="dL__whatdL section__margin" id="wdL">
      <div className="dL__whatdL-feature">
        <Feature
          title="What is DeLance"
          text="DeLance is a freelancing platform powered by blockchain technology. Delance aims to provide a convenient, efficient, and trustless platform, ensuring the protection of both freelancers and hirers."
        />
      </div>
      <div className="dL__whatdL-heading">
        <h1 className="gradient__text">
          Equalizing freelance work. 
        </h1>
        <p>Our Features</p>
      </div>
      <div className="dL__whatdL-container">
        <Feature className="mainFeature"
          title="Smart Contract Escrow"
          text="Buyers may choose from preset conditions, or effortlessly set custom conditions using DeLance templates, ensuring that a buyer's terms are met before payments are sent, and freelancers are paid for quality work."
        />
        <Feature className="mainFeature"
          title="Trustless Track Record"
          text="By analyzing On Chain verifiable data, DeLance will generate a report for each of our freelancers. These reports provide buyers a comprehensive history of a freelancer's on chain activity and experience."
        />
        <Feature className="mainFeature"
          title="Native Token"
          text="DeLance will host a native token: DeLA. DeLance will take a 1% Transaction Fee Of All Transactions. Such fees will be used to cover all gas related expenses, with the remainder being distributed to DeLa token holders via staking."
        />
      </div>
    </div>
  );
};

export default WhatDeLance;
