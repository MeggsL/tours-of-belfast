"use client";

import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

// Define the API URL
const apiUrl =
  "https://api.openweathermap.org/data/3.0/onecall?lat={54.596747841427444,}&lon={-5.930042284658504 }&exclude={minutely}&appid={2e33f0daea2c3f06da3773b927775c7b}";

export default function GetWeather() {
    fetch(apiUrl,{
      method: 'GET',)}

    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went very, very wrong");
      }
      return response.json();
    })
    .then((data) => {
      <Stack sx={{ width: "50%" }} spacing={2}>
        <Alert variant="outlined" severity="info">
          <Grid container rowSpacing={4} justifyContent="center">
            <Grid item xs={12} container justifyContent="center">
              Right now
            </Grid>
            <Grid item xs={12} container justifyContent="center">
      <div key={data.key}>
        <pre>{data.current_temp && data.current_feels_like && data.current_weather_main}</pre>
      </div>
            </Grid>
          </Grid>
        </Alert>
      </Stack>;
    })
    .catch((error) => {
      console.error("Um...:", error);
    });
}

/*
  return (
    <div>
      {data.map((weather) => (
        <div key={weather.id}>
          <h2>{weather.description}</h2>
          <p>{weather.id}</p>
        </div>
      ))}
    </div>
  )};
  */
