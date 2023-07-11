import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/Faycal-Bezleghdir">
        <FiGithub className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/faycal-bezleghdir-/">
        <FiLinkedin className="icon" />
      </a>
    </div>
  );
}

export default Footer;
