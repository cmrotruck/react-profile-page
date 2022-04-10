import React, { useState } from "react";
import screenshot from "../../assets/Projects/screenshot.jpg";

export default function Test() {
  const [isShown, setIsShown] = useState(false);

  const handleShow = () => setIsShown(true);
  const handleHide = () => setIsShown(false);

  return (
    <div className="ui special cards">
      <div className="card">
        <div
          onMouseEnter={handleShow}
          onMouseLeave={handleHide}
          className={
            isShown === true
              ? "blurring dimmable image dimmed"
              : "blurring dimmable image"
          }
        >
          {isShown && (
            <div className="ui dimmer">
              <div className="content">
                <div className="center">
                  <div class="ui primary button">Add Friend</div>
                </div>
              </div>
            </div>
          )}
          {/* {isShown ? "Add Friend" : "NO FRIENDS"} */}
          <img src={screenshot} alt="" />
        </div>
        <div className="content">
          <a href="/" className="header">
            Team Fu
          </a>
          <div className="meta">
            <span className="date">Created in Sep 2014</span>
          </div>
        </div>
        <div className="extra content">
          <a href="/">
            <i className="users icon"></i>2 Members
          </a>
        </div>
      </div>
      {/* <div className="card">
        <div className="blurring dimmable image">
          <div className="ui inverted dimmer">
            <div className="content">
              <div className="center">
                <div className="ui primary button">Add Friend</div>
              </div>
            </div>
          </div>
          <img src={screenshot} alt="" />
        </div>
        <div className="content">
          <a href="/" className="header">
            Team Hess
          </a>
          <div className="meta">
            <span className="date">Created in Aug 2014</span>
          </div>
        </div>
        <div className="extra content">
          <a href="/">
            <i className="users icon"></i>2 Members
          </a>
        </div>
      </div> */}
    </div>
  );
}
