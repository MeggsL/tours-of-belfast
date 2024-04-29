import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../../globals.css";
import BottomNavMaps from "../../../components/purple-components/PurpleyBottomNavMaps";
import PurpleMapAll from "../../../components/purple-components/PurpleMapBLS";

export default function PurpleMapOfBandLandS() {
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
        <PurpleMapAll />
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
