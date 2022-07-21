import React from "react";
import Card from "react-bootstrap/Card";
import "./WeatherCard.css";

export const WeatherCard = ({
  city,
  min,
  max,
  weatherType,
  weatherTypeN,
  weatherKey,
}) => {
  return (
    <div
      className="weatherCard"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        className="shadow-lg p-3 mb-5 bg-white rounded"
        border="light"
        style={{ width: "18rem", position: "center center" }}
      >
        <Card.Img
          variant="top"
          src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`}
          alt={weatherType}
        />
        <Card.Body>
          <Card.Title>Weather today in {city}</Card.Title>
          <Card.Text>
            Day: {weatherType} <br />
            Night: {weatherTypeN}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Temperature: <br />
            Max: {max} / Min: {min}
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
};
