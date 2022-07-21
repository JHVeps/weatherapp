import React from "react";
import { useEffect, useState } from "react";
import { apiKey, fixValue } from "../utils";
import { SearchButton } from "./SearchButton";
import { WeatherCard } from "./WeatherCard";
import Container from "react-bootstrap/Container";
import "./Homepage.css";

export const Homepage = () => {
  //const cityKey = "133328"; // -> For testing purposes
  const [weatherInfo, setWeatherInfo] = useState();
  const [cityKey, setCityKey] = useState("");
  const [city, setCity] = useState("");
  //const [error, setError] = useState(null);

  useEffect(() => {
    if (cityKey) {
      fetch(
        `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}&metric=true`
      )
        .then((res) => res.json())
        .then((res) => {
          setWeatherInfo(
            res.DailyForecasts.map((df) => {
              return {
                min: df.Temperature.Minimum.Value,
                max: df.Temperature.Maximum.Value,
                weatherType: df.Day.IconPhrase,
                weatherTypeN: df.Night.IconPhrase,
                weatherKey: fixValue(df.Day.Icon),
              };
            })
          );
        });
    }
  }, [cityKey]);

  return (
    <Container fluid>
      <div className="homepage">
        <SearchButton
          onCityFound={(cityInfo) => {
            //console.log("FOUND: ", cityInfo); // -> For testing purposes
            setCityKey(cityInfo.key);
            setCity(cityInfo.name);
          }}
        />
        <div>
          {/* <h3>{city}</h3> */}
          {!!weatherInfo &&
            weatherInfo.map((i, index) => (
              <div key={index}>
                <WeatherCard
                  city={city}
                  min={i.min}
                  max={i.max}
                  weatherType={i.weatherType}
                  weatherTypeN={i.weatherTypeN}
                  weatherKey={i.weatherKey}
                />
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};
