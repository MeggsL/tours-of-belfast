import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BottomNavMaps from "../../../peachy-components/PeachyBottomNavMaps";
import PinkMapOfBuildingsAndLandmarks from "../../../peachy-components/PinkMapBL";
import "../../../peachypink.css";

export default function PinkMapOfBandL() {
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
        <PinkMapOfBuildingsAndLandmarks />
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
