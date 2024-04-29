import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BottomNavMaps from "../../../peachy-components/PeachyBottomNavMaps";
import PinkMapOfLandmarks from "../../../peachy-components/PinkMapOfLandmarks";
import "../../../peachypink.css";

export default function PinkMapOfL() {
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
        <PinkMapOfLandmarks/>
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
