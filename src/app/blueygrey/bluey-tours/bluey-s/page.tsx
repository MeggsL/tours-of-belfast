import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BlueyBottomNavMaps from "../../../blueygrey/bluey-components/BlueyBottomNavMaps";
import BlueMapOfStatues from "../../bluey-components/BlueMapOfStatues";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

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
      <Grid paddingBottom={2.5}>
        <BlueyBottomNavMaps />
      </Grid>
    </Box>
  );
}