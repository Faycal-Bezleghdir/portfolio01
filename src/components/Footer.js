import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/Faycal-Bezleghdir">
        <img src="gitlogo.png" alt="github" className="gitlogo" />
      </a>
      <a href="https://www.linkedin.com/in/faycal-bezleghdir-/">
        <img src="linkedlogo.png" alt="logo" className="linkedlogo" />
      </a>
    </div>
  );
}

export default Footer;
