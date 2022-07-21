import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <div className="py-4 text-center text-white">
            Powered by{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://developer.accuweather.com"
              target="_blank"
              rel="noreferrer"
            >
              AccuWeather APIs
            </a>
          </div>

          <div className="copyright py-4 text-center text-white">
            <div className="container">
              <small>Copyright &copy; JHVeps 2022</small>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
