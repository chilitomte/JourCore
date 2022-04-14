import { Container, Jumbotron } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="p1">
      <Jumbotron>
        <h2 className="centerHeader">Kontakt</h2>
        <address>
          Byggd av{" "}
          <a href="mailto:mattis.nilsson@extrapreneur.se">Mattis Nilsson</a>
          <br />
          Extrapreneur Syd AB
        </address>
      </Jumbotron>
    </Container>
  );
};

export default Contact;
