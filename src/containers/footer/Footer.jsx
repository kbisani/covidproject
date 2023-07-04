import React from "react";
import dLLogo from "../../assets/logo.webp";
import { AiFillInstagram, AiTwotoneMail } from "react-icons/ai";
import { FaDiscord, FaTwitter } from "react-icons/fa";

import "./Footer.css";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="dL__footer section__padding">
      <div className="dL__footer-links">
        <div className="dL__footer-links_logo">
          <img src={dLLogo} alt="dL_logo" />
          <p>
            @2022 DeLance.
            <br /> All rights reserved.
          </p>
        </div>
        <div className="dL__footer-links_div">
          <div>
            <IconContext.Provider value={{ className: "social-media" }}>
              <a href="https://www.instagram.com/delance_xyz/" target="_blank">
                <AiFillInstagram />
              </a>
              <a href="https://discord.com/invite/ZMEUmYpsH3" target="_blank">
                <FaDiscord />
              </a>
              <a href="mailto:info@delance.xyz" target="_blank">
                <AiTwotoneMail />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
