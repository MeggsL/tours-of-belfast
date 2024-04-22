import React from "react";
import PurpleWelcome from "./tours/purple-components/PurpleWelcome.js";
import "./glbals.css";

import "./page.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BottomNavWelcome from "./components/BottomNavWelcome.js";

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
        paddingBottom={7}
      >
        <PurpleWelcome />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        justifyContent="center"
        rowSpacing={0}
        padding={0}
        paddingTop={1}
        paddingBottom={3}
      >
      <BottomNavWelcome />
      </Grid>
    </Box>
  );
}
