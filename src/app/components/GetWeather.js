"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
//import Oval from "react-loader-spinner";
import "./getweather.css";
//import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//import Alert from "@mui/material/Alert";

function CurrentWeather() {
  // const [input, setInput] = useState("");
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  //useEffect and the empty [] stops the code from running in an infinite loop and making hundreds of calls to the API
  useEffect(() => {
    getWeather();
  }, []);

  // function to fetch data using Axios
  const getWeather = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=54.596617288210005&lon=-5.930042286615252&appid=708e98ba900f0f0b00a0560aaa10ae72",
        {
          params: {
            units: "metric",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setWeather({ data: res.data, loading: false, error: false });
      })
      .catch((err) => {
        setWeather({ ...weather, data: {}, error: true });
      });
  };

  return (
    <div className="App">
      <div className="weather-app">
        {weather.error && (
          <div className="error-message">
            <span>What the...</span>
          </div>
        )}

        {weather && weather.data && weather.data.main && (
          <div>
            <div className="city-name">
              <h2>{weather.data.name}</h2>
            </div>

            <div className="icon-temp">
              <img
                src={"https://openweathermap.org/img/wn/10d@2x.png"}
                alt=""
              />
              {Math.round(weather.data.main.temp)}
              <sup className="deg">°C</sup>
            </div>

            <div className="feels-like">
              Feels like: {Math.round(weather.data.main.feels_like)}{" "}
              <sup className="degfeelslike">°C</sup>
            </div>
            <div className="description">
              <p>{weather.data.weather.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrentWeather;