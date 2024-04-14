import React from "react";
//import BlueMapOfBuildings from "../(tour-components)/BlueMapOfBuildings";
import "../../purple.css";
import Box from "@mui/material/Box";
//import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//import UpTopMenu from "../../components/TopMenu.js";
//import PurpleBottomNavMaps from "../../purple-components/PurpleBottomNavMaps";
//import FixedBottomNavigation from "../../components/BottomNavFixed";
//import FloatingButton from "../../components/FloatingButton";

import BottomNavMaps from "../../../components/BottomNavMaps";
import PinkMapOfStatues from "../../peachy-components/PinkMapOfStatues";

export default function PinkStatues() {
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
        <PinkMapOfStatues />
      </Grid>
      <Grid paddingBottom={2.5}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
