import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../../globals.css";
import BottomNavMaps from "../../../components/purple-components/PurpleyBottomNavMaps";
import PurpleMapOfStatues from "../../../components/purple-components/PurpleMapOfStatues";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function PurpleMapOfS() {
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
        <PurpleMapOfStatues />
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
