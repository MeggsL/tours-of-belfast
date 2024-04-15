import React from "react";
import PeachyWelcome from "./peachy-components/PeachyWelcome.js";
import ".//peachypink.css";
import "../page.module.css";
//import Grid from "@mui/material/Unstable_Grid2";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import Container from "@mui/material/Container";
import BottomNavWelcome from "../components/BottomNavWelcome.js";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function PeachyHome() {
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
        <PeachyWelcome />
        </Grid>
      <BottomNavWelcome />
    </Box>
  );
}
