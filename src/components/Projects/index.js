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
          <ProjectCard
            title="Bootcamp Zoo"
            created="2022"
            description="An application that mimics a zoo website. It allows for donations to be made
                base an animal breed. Also has a feed for conversations to be held."
            screenshot={require("../../assets/Projects/Bootcamp_Zoo.jpg")}
            github="https://github.com/cmrotruck/bootcamp-zoo"
            deployed="http://bootcamp-zoo.herokuapp.com/"
          />
          <ProjectCard
            title="Note Taker"
            created="2021"
            description="This is a backend assignment where the front end was already created. We had to create routes to point the html pages and api requests to the correct endpoints an manages a db.json file. This is a task board application. You can create and delete tasks. You can click on notes in the left column to see more info."
            screenshot={require("../../assets/Projects/note-taker-screenshot.png")}
            github="https://github.com/cmrotruck/note_taker"
            deployed="https://note-taker76.herokuapp.com/"
          />
          {/* <ProjectCard /> */}
        </Card.Group>
      </Dimmer.Dimmable>
    </div>
  );
};

export default Projects;
