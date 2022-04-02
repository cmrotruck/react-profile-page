import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="fixed">
      <img
        className="footerLogo"
        src={require("../../assets/footer/27-277988_linkedin-logo-png-branco.png")}
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