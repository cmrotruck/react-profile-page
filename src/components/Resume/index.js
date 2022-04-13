import React from "react";
import myPDF from "../../assets/pdf/Chad_Rotruck_Resume.pdf";

const Resume = () => {
  return (
    <div className="Resume">
      <p>
        {" "}
        Download a copy of my resume{" "}
        <span>
          <a
            href="https://drive.google.com/file/d/1q-Q-BMlb7Geay1bm8ckJ7Ggouk7_lbs1/view?usp=sharing"
            download
          >
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
