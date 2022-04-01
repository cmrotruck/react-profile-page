import React from "react";

const Nav = () => {
  return (
    <header>
      <div className="ui vertical masthead center aligned segment">
        <div className="ui container">
          <div className="ui large secondary pointing menu">
            <div className="left item">
              <h1 href="/" className="ui">
                Chad Rotruck
              </h1>
            </div>
            <a href="/" className="item">
              About Me
            </a>
            <a href="/" className="item">
              Portfolio
            </a>
            <a href="/" className="item">
              Resume
            </a>
            <a href="/" className="item">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
