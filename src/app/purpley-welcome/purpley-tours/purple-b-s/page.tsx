import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../../globals.css";
import BottomNavMaps from "../../../components/purple-components/PurpleyBottomNavMaps";
import PurpleMapOfBuildingsAndStatues from "../../../components/purple-components/PurpleMapBS";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function PurpleMapOfBandS() {
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
        <PurpleMapOfBuildingsAndStatues />
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
