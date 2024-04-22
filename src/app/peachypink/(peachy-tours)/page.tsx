import React from "react";
import PeachyTourTable from "../peachy-components/PeachyTourTable.js";
//import BottomNavTours from "../components/BottomNavTours.js";
import "../../peachypink/peachypink.css";
import "../pp-page.module.css";
import Grid from "@mui/material/Grid";
//import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
//import Box from "@mui/material/Box";
import BottomNavWelcome from "../../components/BottomNavWelcome.js";
import Box from "@mui/material/Box";

//import Container from "@mui/material/Container";

export default function PeachyToursHome() {
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
        <PeachyTourTable />

        </Grid>
      <BottomNavWelcome />
    </Box>
  );
}
