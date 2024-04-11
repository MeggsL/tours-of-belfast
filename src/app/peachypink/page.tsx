import React from "react";
import PeachyWelcome from "./peachy-components/PeachyWelcome.js";
import ".//peachypink.css";
import "../page.module.css";
//import Grid from "@mui/material/Unstable_Grid2";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BottomNavMaps from "../components/BottomNavMaps.js";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function PeachyHome() {
  return (
    <div>
      <Grid
        item
        xs={12}
        container
        justifyContent="center"
        rowSpacing={0}
        paddingTop={5}
        paddingBottom={8}
      >
        <PeachyWelcome />
        <BottomNavMaps />
      </Grid>
    </div>
  );
}
