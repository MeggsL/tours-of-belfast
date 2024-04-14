import React from "react";
import PurpleWelcome from "./purple-components/PurpleWelcome.js";
import "./purple.css";

import "./p-page.module.css";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import PurpleBottomNavMaps from "./purple-components/PurpleBottomNavMaps.js";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function PurpleHome() {
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
        <PurpleWelcome />

      </Grid>
      <PurpleBottomNavMaps />
    </Box>
  );
}
