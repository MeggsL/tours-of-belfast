import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BottomNavMaps from "../../../peachy-components/PeachyBottomNavMaps";
import PinkMapOfLandmarksAndStatues from "../../../peachy-components/PinkMapLS";
import "../../../peachypink.css";

export default function PinkMapOfLandS() {
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
        <PinkMapOfLandmarksAndStatues/>
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
