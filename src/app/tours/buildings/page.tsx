import React from "react";
//import BlueMapOfBuildings from "../(tour-components)/BlueMapOfBuildings";
import "../../globals.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import UpTopMenu from "../../components/TopMenu.js";
import BottomNavMaps from "../../components/BottomNavMaps";
import FixedBottomNavigation from "../../components/BottomNavFixed";
import FloatingButton from "../../components/FloatingButton";

import BlueMapOfBuildings from "../(tour-components)/BlueMapOfBuildings";

export default function BlueBuildings() {
  return (
    <Box>
      <Grid item container rowSpacing={0} padding={0}>
        <BlueMapOfBuildings />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        justifyContent="center"
        rowSpacing={0}
        padding={0}
        position={"fixed"}
      >
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
