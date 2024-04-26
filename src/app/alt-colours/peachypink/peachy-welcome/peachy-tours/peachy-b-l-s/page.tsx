import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PinkMapAll from "../../../peachy-components/PinkMapBLS";
import PeachyBottomNavMaps from "../../../../peachypink/peachy-components/PeachyBottomNavMaps";
import "../../../peachypink.css";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

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
        <PeachyBottomNavMaps />
      </Grid>
    </Box>
  );
}
