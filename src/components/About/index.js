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
          <blockquote className="col">
            <p className="blockquote">Hello, I am Chad Rotruck.</p>
            <p className="blockquote">
              I am a web developer with 8 years experience in software
              development. I recently earned a certificate in Full Stack
              Development from The Ohio State University focusing on developing
              skills in JavaScript, CSS, React.js, JavaScript, Node.js as well
              as keeping the design responsive.
            </p>
            <p className="blockquote">
              As a computer programmer making the switch to web development, I
              bring a logical approach to design with a focus on mobile first
              development. My previous experience with creating applications
              that communicate with servers and databases have prepared me for
              current web applications as well as being able to work as a team.
              In my spare time, I volunteer coach for Ohio State University
              Bowling Club.
            </p>
            <p className="blockquote">
              In my spare time, I volunteer coach for Ohio State University
              Bowling Club as well as create game controllers for racing
              simulators, such as steering wheels, shifters, button boxes, and
              hand breaks.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
