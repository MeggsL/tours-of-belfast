import React from "react";
//import BlueMapOfBuildings from "../(tour-components)/BlueMapOfBuildings";
import "../../purple.css";
import Box from "@mui/material/Box";
//import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//import UpTopMenu from "../../components/TopMenu.js";
import PurpleBottomNavMaps from "../../purple-components/PurpleBottomNavMaps";
//import FixedBottomNavigation from "../../components/BottomNavFixed";
//import FloatingButton from "../../components/FloatingButton";

import PurpleMapOfBuildings from "../../purple-components/PurpleMapOfBuildings";

export default function BlueBuildings() {
  return (
    <Box>
      <Grid item container rowSpacing={0} padding={0}>
        <PurpleMapOfBuildings />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        justifyContent="center"
        rowSpacing={0}
        padding={0}
      
      >
        <PurpleBottomNavMaps />
      </Grid>
    </Box>
  );
}
