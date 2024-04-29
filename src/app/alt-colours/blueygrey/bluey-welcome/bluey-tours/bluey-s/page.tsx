import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BottomNavMaps from "../../../bluey-components/BlueyBottomNavMaps";
import BlueMapOfStatues from "../../../bluey-components/BlueMapOfStatues";
import "../../../blueygrey.css";


export default function BlueMapOfS() {
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
        <BlueMapOfStatues />
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
