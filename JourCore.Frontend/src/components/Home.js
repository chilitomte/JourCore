import { Container, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  return (
    <Container>
      <Jumbotron fluid className="center">
        <h2>Välkommen!</h2>
        <p>Här kan vi hantera alla våra jourer och deras öppettider så att de kan visas på hemsidan.</p>
      </Jumbotron>
    </Container>
  );
};

export default Home;
