import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://www.linkedin.com/in/chad-rotruck-80ab0ba9/">
        <img
          className="footerLogo"
          src={require("../../assets/footer/27-277988_linkedin-logo-png-branco.png")}
          alt="small linkedIn logo"
        ></img>
      </a>
      <a href="https://github.com/cmrotruck">
        <img
          className="footerLogo"
          src={require("../../assets/footer/GitHub-Mark-Light-120px-plus.png")}
          alt="small Github logo"
        ></img>
      </a>
    </footer>
  );
};

export default Footer;
