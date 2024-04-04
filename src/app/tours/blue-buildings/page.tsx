import React from "react";
import BlueMapOfBuildings from "./BlueBuildingsMap";
import "../../globals.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BottomNavOverwhelm from "../../../components/BottomNavOverwhelm.js";
import UpTopMenu from "../../../components/TopMenu.js";
import BlueMapBuildings from "./BlueMapBuildings";


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
<BlueMapBuildings />
          </Container>
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={4}>
          <BottomNavOverwhelm />
        </Grid>
      </Grid>
      <Container />
    </Box>
  );
}
