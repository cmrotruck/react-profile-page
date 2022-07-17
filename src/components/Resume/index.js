import React from "react";
import myPDF from "../../assets/pdf/Chad_Rotruck_Resume.pdf";

const Resume = () => {
  return (
    <div className="Resume">
      <p>
        {" "}
        You can obtain a copy of my resume{" "}
        <span>
          <a href="https://docs.google.com/document/d/10zFEPcK1f-a7mnoBN2nf2jC0JHUmop42oKks4rgmt0s/edit?usp=sharing">
            here
          </a>
        </span>
      </p>

      {/* <a href={myPDF} download="Chad_Rotruck_Resume.pdf">
        {" "}
        Download Here{" "}
      </a> */}
      <h2>Front-end Profenciencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Handlebars</li>
        <li>Semantic</li>
        <li>JQuery</li>
      </ul>
      <h2>Back-end Profenciencies</h2>
      <ul>
        <li>Sequelize</li>
        <li>Mongoose</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>PWA</li>
        <li>MVC</li>
        <li>ORM</li>
        <li>Express</li>
        <li>OOP</li>
        <li>Node.js</li>
        <li>GIT</li>
      </ul>
    </div>
  );
};

export default Resume;
