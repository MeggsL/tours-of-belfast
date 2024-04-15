import React from "react";
import BlueyTourTable from "../bluey-components/BlueyTourTable.js";
//import BottomNavTours from "../components/BottomNavTours.js";
import "../blueygrey.css";
import "../bg-page.module.css";
import Grid from "@mui/material/Grid";
//import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
//import Box from "@mui/material/Box";
import BottomNavWelcome from "../../components/BottomNavWelcome.js";
import Box from "@mui/material/Box";

//import Container from "@mui/material/Container";

export default function BlueyToursHome() {
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
        <BlueyTourTable />
      </Grid>
      <BottomNavWelcome />
    </Box>
  );
}
