"use client";

import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Axios from "axios";

function GetWeather() {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    Axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=54.5967&lon=-5.9300&appid=708e98ba900f0f0b00a0560aaa10ae72"
    ).then((res) => {
      return res.json();
    })
    .then((weather) => {
      setWeather(weather);
    });
  }, []);

  return (

    //{weather.map((items) => (
    <Alert sx={{ width: "50%" }} variant="outlined" severity="info">
      <div key={weather.id}>
        <button>Current Conditions</button>
        <p>{weather}</p>
      </div>
    </Alert>
  )
    
}
export default GetWeather;
