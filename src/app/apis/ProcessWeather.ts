"use client";

import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { stringify } from "querystring";
import GetWeather from "./GetWeather.js";


<GetWeather >
  type RawWeather = [number, number, string, number, number, string];
  <GetWeather />

  type Weather = {
    key: string,
    temp: number,
    feels_like: number,
    description: string,
    sunrise: number,
    sunset: number,
    city_name: string
  };


  const formatted: Weather[] =
    setData.map(([temp, feels_like, description, sunrise, sunset, city_name]) => ({
    temp,
    feels_like,
    description,
    sunrise,
    sunset,
    city_name,
    key: JSON.stringify({temp, feels_like, description, sunrise, sunset, city_name})

  }))
  export default formatted;