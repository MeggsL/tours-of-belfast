import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../../globals.css";
import PurpleyBottomNavMaps from "../../../components/purple-components/PurpleyBottomNavMaps";
import PurpleMapOfLandmarksAndStatues from "../../../components/purple-components/PurpleMapLS";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function PurpleMapOfLandS() {
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
        <PurpleMapOfLandmarksAndStatues/>
      </Grid>
      <Grid paddingBottom={3}>
        <PurpleyBottomNavMaps />
      </Grid>
    </Box>
  );
}