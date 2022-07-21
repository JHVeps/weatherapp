import "./App.css";
import Banner from "./components/Banner";
import { Homepage } from "./components/Homepage";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Banner />
          <Homepage />
          <Footer />
        </Row>
      </Container>
    </div>
  );
}

export default App;
