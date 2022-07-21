import React from "react";
import { useState } from "react";
import { apiKey } from "../utils";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Stack from "react-bootstrap/Stack";
//import InputGroup from "react-bootstrap/InputGroup";
import "./SearchButton.css";

export const SearchButton = ({ onCityFound }) => {
  const [city, setCity] = useState("");
  //const [error, setError] = useState(null);

  const getCity = (tCity) => {
    //console.log(tCity); // -> For testing purposes
    const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${tCity}`;

    fetch(url)
      .then((res) => res.json())
      //.then((res) => console.log(res)) // -> For testing purposes
      .then((res) => res.find((c) => c.LocalizedName))
      .then((res) => {
        onCityFound({
          name: res.LocalizedName,
          key: res.Key,
        }).catch((err) => {
          console.log(err.message);
        });

        setCity("");
      });
  };

  return (
    <div className="searchField">
      <Container fluid>
        <Row>
          {/* <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter the name of a city"
              onChange={(e) => setCity(e.target.value)}
            />
            <Button variant="outline-secondary" onClick={() => getCity(city)}>
              Search
            </Button>
          </InputGroup>  */}
          {/* <Stack direction="horizontal" gap={2}>
            <Form.Control
              className="me-auto"
              placeholder="Enter the name of a city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            /> */}
          <Col>
            <input
              className="txtField"
              placeholder="Enter the name of a city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {/* </Col>
          <Col> */}
            <button
              className="searchBtn"
              variant="secondary"
              size="lg"
              //active
              onClick={() => getCity(city)}
            >
              Search
            </button>
          </Col>
          {/* </Stack> */}
        </Row>
      </Container>
    </div>
  );
};
