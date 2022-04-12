// import { Button } from "bootstrap";
import React, { useState } from "react";
import {
  Card,
  Dimmer,
  Image,
  Segment,
  Header,
  Button,
} from "semantic-ui-react";

export default function ProjectCard(props) {
  const { title, created, description, screenshot, github, deployed } = props;
  const [state, setState] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleShow = () => setState(true);
  const handleHide = () => setState(false);
  const handleIsHovered = () => setIsHovered(true);
  const handleNotHovered = () => setIsHovered(false);

  return (
    <Card
      dimmed={state === true ? "true" : "false"}
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
    >
      <Dimmer active={state} className="inverted">
        <div className="deployed">
          <a href={deployed} as="h2" className="card_deployed_link">
            {title}
          </a>
        </div>

        <Image
          src={require("../../assets/Projects/GitHub-Mark-64px.png")}
          href={github}
          className="primary"
          onMouseEnter={handleIsHovered}
          onMouseLeave={handleNotHovered}
          dimmed={isHovered === true ? "true" : "false"}
        />
      </Dimmer>
      <Image src={screenshot} alt="screenshot" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>Created in {created}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra></Card.Content>
    </Card>
  );
}
