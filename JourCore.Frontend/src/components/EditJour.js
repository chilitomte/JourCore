import { Container, Jumbotron } from "react-bootstrap";

const EditJour = (props) => {
  console.log(props);
  return (
    <Container className="container-1">
      <Jumbotron>
        <h2 className="centerHeader">Edit Jour Page</h2>
        <p>Edit jour with the id {props.match.params.id}</p>
      </Jumbotron>
    </Container>
  );
};

export default EditJour;
