import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        className="footerLogo"
        src={require("../../assets/footer/27-277988_linkedin-logo-png-branco.png")}
        href="https://www.linkedin.com/in/chad-rotruck-80ab0ba9/"
        alt="small linkedIn logo"
      ></img>
      <img
        className="footerLogo"
        src={require("../../assets/footer/GitHub-Mark-Light-120px-plus.png")}
        alt="small Github logo"
      ></img>
    </footer>
  );
};

export default Footer;
