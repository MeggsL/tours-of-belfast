//import React, { Children } from "react";
import React, { lazy } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//import AirQuality from "../api/AirQuality.js";
import GetWeather from "../../components/GetWeather_copy_3.js";

export default function Weather() {
  return (

        <div>
<GetWeather />
        </div>

  );
}
