import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import JourForm from "./JourForm";

function AddJour() {
  const handleOnSubmit = (jour) => {
    console.log(jour);
  };

    return (
        <Container>
            <Jumbotron>
        <React.Fragment>
          <JourForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
      </Jumbotron>
    </Container>
  );
}

export default AddJour;
