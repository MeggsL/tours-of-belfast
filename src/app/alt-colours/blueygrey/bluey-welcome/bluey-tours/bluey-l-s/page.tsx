import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BottomNavMaps from "../../../bluey-components/BlueyBottomNavMaps";
import BlueMapOfLandmarksAndStatues from "../../../bluey-components/BlueMapLS";
import "../../../blueygrey.css";


export default function BlueMapOfLandS() {
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
        <BlueMapOfLandmarksAndStatues/>
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
