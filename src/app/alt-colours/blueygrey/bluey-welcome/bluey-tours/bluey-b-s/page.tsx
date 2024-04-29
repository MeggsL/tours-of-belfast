import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BottomNavMaps from "../../../bluey-components/BlueyBottomNavMaps";
import BlueMapOfBuildingsAndStatues from "../../../bluey-components/BlueMapBS";
import "../../../blueygrey.css";

export default function BlueMapOfBandS() {
  return (
    <Box>
      <Grid item justifyContent="center" paddingBottom={0}>
        <BlueMapOfBuildingsAndStatues />
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
