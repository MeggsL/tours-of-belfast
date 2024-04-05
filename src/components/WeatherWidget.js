"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import "../app/globals.css";
import "../app/page.module.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TransitionHover from "../components/StyledAvatarButton.js";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function WeatherWidget() {
    return (
      <Box xs={{ flexgrow: 1, bgcolor: "#cfe8fc", height: "100vh" }}>
        <Container maxWidth="sm"></Container>
        <Grid container rowSpacing={4} justifyContent="center">
        <div id="openweathermap-widget-12"></div>

window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; 
     window.myWidgetParam.push({
     id: 12,
     cityid: '2655984',
     appid: '708e98ba900f0f0b00a0560aaa10ae72',
     units: 'metric',
     containerid: 'openweathermap-widget-12', 
     
     });  
    
     (function() {
     var script = document.createElement('script');
     script.async = true;
     script.charset = "utf-8";
     script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
     var s = document.getElementsByTagName('script')[0];
     s.parentNode.insertBefore(script, s);  
     })();

          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            rowSpacing={-5}
          ></Grid>
        </Grid>
        <Container />
      </Box>
    );
  }


