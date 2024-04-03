import React from "react";
//import "../../globals.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//import AirQuality from "../api/AirQuality.js";
import GetAirQuality from "../../components/AirQuality";

export default function AirQuality() {
  return (
    <Box xs={{ flexgrow: 1, bgcolor: "#cfe8fc", height: "100vh" }}>
      <Container maxWidth="sm"></Container>
      <Grid container rowSpacing={4} justifyContent="center">
        <Grid item xs={12} container justifyContent="center" rowSpacing={-3}>
<GetAirQuality />
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={3}>
          <Container fixed>
    
          </Container>
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={4}>

        </Grid>
      </Grid>
      <Container />
    </Box>
  );
}
