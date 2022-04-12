import React from "react";

const Resume = () => {
  return (
    <div className="Resume">
      <p>
        {" "}
        Download a copy of my resume{" "}
        <span>
          <a
            href="https://docs.google.com/document/d/1zJjotQA6CmTt6E5evukREKomhGKHMJmRNhHdzu6n_Lo/edit?usp=sharing"
            download
          >
            here
          </a>
        </span>
      </p>
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
