import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PeachyBottomNavMaps from "../../../../peachypink/peachy-components/PeachyBottomNavMaps";
import PinkMapOfBuildingsAndStatues from "../../../peachy-components/PinkMapBS";
import "../../../peachypink.css";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

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
        <PeachyBottomNavMaps />
      </Grid>
    </Box>
  );
}
