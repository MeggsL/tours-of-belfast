import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PinkMapAll from "../../../peachy-components/PinkMapBLS";
import BottomNavMaps from "../../../peachy-components/PeachyBottomNavMaps";
import "../../../peachypink.css";

export default function PinkMapOfAll() {
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
        <PinkMapAll />
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
