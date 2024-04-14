import BlueyWelcome from "./bluey-components/BlueyWelcome.js";
import "./blueygrey.css";
import BottomNavMaps from "../components/BottomNavMaps.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function BlueHome() {
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
        <BlueyWelcome />
      </Grid>
      <BottomNavMaps />
    </Box>
  );
}
