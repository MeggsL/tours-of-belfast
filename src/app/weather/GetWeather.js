"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./getweather.css";

export default function TheWeather() {
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
      })

};
{/*}
const needUmbrella = (weather) => {
  if (weather.data.weather[0].id >= 200 && weather.data.weather[0].id <= 700)  {
    <span>Bring your brolly!</span>
  }
}
*/}

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
            <div className="city-name">{weather.data.name}</div>
            <div className="description">
              {weather.data.weather[0].main}
<needUmbrella />
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

            <div>
              <tr>
                <td className="min-max-temp">
                  Min: {Math.round(weather.data.main.temp_min)}{" "}
                  <sup className="degminmax">°C</sup>
                </td>

                <td className="min-max-temp" width="80px" align="center">
                  Max: {Math.round(weather.data.main.temp_max)}{" "}
                  <sup className="degminmax">°C</sup>
                </td>
              </tr>
            </div>

        
          </div>
        )}
      </div>
    </div>
  );
}