import { Container, Jumbotron } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="p1">
      <Jumbotron>
        <h2 className="centerHeader">
          Whoops! Finns i sjön, eller någon annanstans, testa{" "}
        </h2>
      </Jumbotron>
    </Container>
  );
};

export default NotFound;
