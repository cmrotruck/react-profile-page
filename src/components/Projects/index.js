import React from "react";
import ProjectCard from "./ProjectCard";
// import Test from "./test.js";
import { Card, Dimmer, Image, Segment, Button } from "semantic-ui-react";

const Projects = () => {
  return (
    <div className="row">
      <Dimmer.Dimmable as={Segment}>
        <Card.Group centered stackable dimmable="true">
          <ProjectCard
            title="Recipe Search"
            created="2021"
            description="An application that you can search food recipes by entering a
                type of food and will return 6 recipies and nutritional facts
                about the recipe."
            screenshot={require("../../assets/Projects/screenshot.jpg")}
            github="https://github.com/cmrotruck/recipe-search"
            deployed="https://cmrotruck.github.io/recipe-search/"
          />
          <ProjectCard
            title="The Forum"
            created="2022"
            description="An application that you can search food recipes by entering a
                type of food and will return 6 recipies and nutritional facts
                about the recipe."
            screenshot={require("../../assets/Projects/The_Forum_Screenshot.jpg")}
            github="https://github.com/cmrotruck/the-forum"
            deployed="https://chad-the-forum.herokuapp.com/"
          />
          {/* <ProjectCard /> */}
        </Card.Group>
      </Dimmer.Dimmable>
    </div>
  );
};

export default Projects;
