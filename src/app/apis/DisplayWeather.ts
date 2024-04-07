"use client";

import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { stringify } from "querystring";

import setData from "./apis/OpenWeatherAxios";

function DisplayWeather() {

  return(

      <Container sx={{ width: "70%" }}>
        <Alert variant="outlined" severity="info">
          {data.map(
            (item) => (
              <div key={item.weather}>
              (<h2>Current Conditions</h2>),
              (<p>{weather.id}</p>),
              (<p>{weather.main}</p>),
              (<p>{weather.description}</p>),
              (<p>{weather.icon}</p>)
              //</div>
            )
          )}
        </Alert>
      </Container>
  )
            };

export default DisplayWeather;
