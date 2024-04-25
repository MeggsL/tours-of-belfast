import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BlueyBottomNavMaps from "../../../bluey-components/BlueyBottomNavMaps";
import BlueMapOfBuildingsAndLandmarks from "../../../bluey-components/BlueMapBL";
import "../../../blueygrey.css";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function BlueMapOfBandL() {
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
        <BlueMapOfBuildingsAndLandmarks />
      </Grid>
      <Grid paddingBottom={3}>
        <BlueyBottomNavMaps />
      </Grid>
    </Box>
  );
}
