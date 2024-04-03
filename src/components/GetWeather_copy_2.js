"use client";

import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

export default function GetWeather(){
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {

const response =  fetch('process.env.OPEN_WEATHER', {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }) 
    
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
    
});

  return (
    <Stack sx={{ width: "50%" }} spacing={2}>
      <Alert variant="outlined" severity="info">
      <Grid container rowSpacing={4} justifyContent="center">
        <Grid item xs={12} container justifyContent="center">
        Right now
        </Grid>
        <Grid item xs={12} container justifyContent="center">
       
             <li key={data.weather}>{data.weather_description}</li>
               
        </Grid>
        </Grid>
      
      </Alert>
    </Stack>
  );
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