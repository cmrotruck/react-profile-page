import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container about">
      <div className="row align-items-center">
        <img
          className="portfolio_photo col-6"
          src={require("../../assets/header/Portfolio_Photo.JPG")}
          alt="Portfolio_Photo.JPG"
        />
        <div className="col-6 align-self-center">
          <blockquote className="col text-center">
            <p className="blockquote">Hello, I am Chad Rotruck.</p>
            <p className="blockquote">
              I am a web developer with 8 years experience in software
              development. I am also a volunteer coach for Ohio State University
              Bowling Club.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
