import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a
          href="#aboutMe"
          onClick={() => handlePageChange("aboutMe")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={
            currentPage === "aboutMe" ? "nav-link active item" : "nav-link item"
          }
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Projects"
          onClick={() => handlePageChange("Projects")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Projects"
              ? "nav-link active item"
              : "nav-link  item"
          }
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Contact"
              ? "nav-link active item"
              : "nav-link  item"
          }
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Resume" ? "nav-link active item" : "nav-link  item"
          }
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
