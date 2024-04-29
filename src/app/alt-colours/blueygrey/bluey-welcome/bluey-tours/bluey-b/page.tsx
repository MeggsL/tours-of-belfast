import React from "react";
import BlueMapOfBuildings from "../../../bluey-components/BlueMapOfBuildings";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../../blueygrey.css";
import BottomNavMaps from "../../../bluey-components/BlueyBottomNavMaps";


export default function BLueMapOfBs() {
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
        <BlueMapOfBuildings />
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
