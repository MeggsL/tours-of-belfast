import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BottomNavMaps from "../../../peachy-components/PeachyBottomNavMaps";
import PinkMapOfBuildingsAndStatues from "../../../peachy-components/PinkMapBS";
import "../../../peachypink.css";

export default function PinkMapOfBandS() {
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
        <PinkMapOfBuildingsAndStatues />
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
