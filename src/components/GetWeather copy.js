"use client";

import React, { useState, useEffect } from "react";
/*
function GetWeather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=54.596747841427444&lon=-5.930042284658504&appid=708e98ba900f0f0b00a0560aaa10ae72')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default GetWeather;
*/

document.addEventListener("DOMContentLoaded", function GetWeather() {
  fetch(
    'http://api.openweathermap.org/data/2.5/weather?lat=54.596747841427444&lon=-5.930042284658504&appid=708e98ba900f0f0b00a0560aaa10ae72'
  )
    .then(response => response.json())
    .then(data => {
      const dataDisplay = document.getElementById("dataDisplay");

      // Create HTML elements to display the JSON data
      const weatherElement = document.createElement("p");
      weatherElement.textContent =
        "Current conditions: " + data.weather[description];

      const tempElement = document.createElement("p");
      tempElement.textContent = "Temp: " + data.main[temp];

      const feelsElement = document.createElement("p");
      feelsElement.textContent = "Feels like: " + data.main[feels_like];

      const humidityElement = document.createElement("p");
      humidityElement.textContent = "Humidity: " + data.main[humidity];

      const windElement = document.createElement("p");
      windElement.textContent = "Wind speed: " + data.wind[speed];

      // Append the elements to the "dataDisplay" div
      dataDisplay.appendChild(weatherElement),
      dataDisplay.appendChild(tempElement),
      dataDisplay.appendChild(feelsElement),
      dataDisplay.appendChild(humidityElement),
      dataDisplay.appendChild(windElement)
})

      .catch((error) => console.error("Oops, something went wrong!"));

    });
