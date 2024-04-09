import React from "react";
import BlueMapOfBuildings from "../(tour-components)/BlueMapOfBuildings";
import "../../globals.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import UpTopMenu from "../../components/TopMenu.js";
import BottomNavMaps from "../../components/BottomNavMaps";

export default function BlueBuildings() {
  return (
    <Box xs={{ flexgrow: 1, bgcolor: "#cfe8fc", height: "100vh" }}>
      <Container maxWidth="sm"></Container>
      <Grid container rowSpacing={4} justifyContent="center">
        <Grid item xs={12} container justifyContent="center" rowSpacing={-3}>
          <UpTopMenu />
          
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={3}>
          <Container fixed>
            <BlueMapOfBuildings />
          </Container>
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={4}>
        <BottomNavMaps />
        </Grid>
      </Grid>
      <Container />
    </Box>
  );
}
