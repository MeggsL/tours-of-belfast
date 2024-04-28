import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../global.css";
import GreyMapAll from "../../ow-components/GreyMapAll";
import OWBottomNav from "../OWBottomNav";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function GreyMapAll() {
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
    <GreyMapAll />
      </Grid>
      <Grid paddingBottom={3}>
        <OWBottomNav />
      </Grid>
    </Box>
  );
}
