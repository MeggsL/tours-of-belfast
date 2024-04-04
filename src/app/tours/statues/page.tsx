import React from "react";
import "../../globals.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import UpTopMenu from "../../../components/TopMenu.js";
import PinkMapOfStatues from "../(tour-components)/PinkMapOfStatues";
import BottomNavTours from "../../../components/BottomNavTours";

export default function PinkStatues() {
  return (
    <Box xs={{ flexgrow: 1, bgcolor: "#cfe8fc", height: "100vh" }}>
      <Container maxWidth="sm"></Container>
      <Grid container rowSpacing={4} justifyContent="center">
        <Grid item xs={12} container justifyContent="center" rowSpacing={-3}>
          <UpTopMenu />
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={3}>
          <Container fixed>
           <PinkMapOfStatues />
          </Container>
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={4}>
        <BottomNavTours />
        </Grid>
      </Grid>
      <Container />
    </Box>
  );
}
