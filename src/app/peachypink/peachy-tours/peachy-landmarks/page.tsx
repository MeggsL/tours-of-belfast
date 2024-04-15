import React from "react";
import "../../peachypink.css";
import Box from "@mui/material/Box";
//import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//import UpTopMenu from "../../components/TopMenu.js";
//import FloatingButton from "../../components/FloatingButton";
import PinkMapOfLandmarks from "../../peachy-components/PinkMapOfLandmarks";
import PeachyBottomNavMaps from "../../peachy-components/PeachyBottomNavMaps";

export default function PeachyLandmarks() {
  return (
    <Box>
      <Grid
        item
        xs={12}
        sm={6}
        justifyContent="center"
        rowSpacing={0}
        padding={0}
      >
        <PinkMapOfLandmarks />
      </Grid>
      <Grid paddingBottom={2.5}>
        <PeachyBottomNavMaps />
      </Grid>
    </Box>
  );
}