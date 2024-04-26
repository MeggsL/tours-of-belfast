import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BlueyBottomNavMaps from "../../../bluey-components/BlueyBottomNavMaps";
import BlueMapOfBuildingsAndStatues from "../../../bluey-components/BlueMapBS";
import "../../../blueygrey.css";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function BlueMapOfBandS() {
  return (
    <Box>
      <Grid
        item
        justifyContent="center"
        paddingBottom={0}
      >
        <BlueMapOfBuildingsAndStatues />
      </Grid>
      <Grid paddingBottom={3}>
        <BlueyBottomNavMaps />
      </Grid>
    </Box>
  );
}
