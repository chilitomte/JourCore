import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const JourList = () => {
  return (
    <Container>
      <Jumbotron className="center">
        <h2>Jourlista</h2>
        <p>Här kan du kolla på alla jourer, och lägga till nya</p>
      </Jumbotron>
    </Container>
  );
};

export default JourList;
