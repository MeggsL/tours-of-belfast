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

import BlueMapOfBuildings from "../(tour-components)/BlueMapOfBuildings";

export default function BlueBuildings() {
  return (
    <Box>
      <Grid item md={12} container rowSpacing={-1}>

        <BlueMapOfBuildings />
      </Grid>
      <Grid

        item
        md={12}
        container
        justifyContent="center"
        rowSpacing={0}
        padding={0}
      >
<BottomNavMaps />
      </Grid>
    </Box>
  );
}
