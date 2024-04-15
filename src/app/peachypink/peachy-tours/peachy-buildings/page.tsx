import React from "react";
import "../../peachypink.css";
import Box from "@mui/material/Box";
//import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//import UpTopMenu from "../../components/TopMenu.js";
import PeachyBottomNavMaps from "../../peachy-components/PeachyBottomNavMaps";
//import FloatingButton from "../../components/FloatingButton";

import PinkMapOfBuildings from "../../peachy-components/PinkMapOfBuildings";

export default function PinkBuildings() {
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
        <PinkMapOfBuildings />
      </Grid>
      <Grid paddingBottom={2.5}>
        <PeachyBottomNavMaps />
      </Grid>
    </Box>
  );
}
