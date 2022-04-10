import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("aboutMe");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
      // return <p>Contact</p>;
    }
    if (currentPage === "Resume") {
      // return <Resume />;
      return <p>Resume</p>;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container-fluid">
      <header className="row col-13">
        <div className="col-6">
          <h1>Chad Rotruck</h1>
        </div>
        <div className="col-6">
          {/* We are passing the currentPage from state and the function to update it */}
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </header>
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
