import BlueyWelcome from "./bluey-components/BlueyWelcome.js";
import "./blueygrey.css";
import "./bg-page.module.css";
import BottomNavWelcome from "../components/BottomNavWelcome.js";
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
        paddingBottom={7}
      >
        <BlueyWelcome />
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
