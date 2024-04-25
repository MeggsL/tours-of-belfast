import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BlueyBottomNavMaps from "../../../bluey-components/BlueyBottomNavMaps";
import BlueMapAll from "../../../bluey-components/BlueMapBLS";
import "../../../blueygrey.css";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function BlueMapOfBandLandS() {
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
        <BlueMapAll />
      </Grid>
      <Grid paddingBottom={3}>
        <BlueyBottomNavMaps />
      </Grid>
    </Box>
  );
}
