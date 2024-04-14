import React from "react";
import BlueyTourTable from "../bluey-components/BlueyTourTable.js";
//import BottomNavTours from "../components/BottomNavTours.js";
import "../../peachypink/peachypink.css";
import "../pp-page.module.css";
import Grid from "@mui/material/Grid";
//import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
//import Box from "@mui/material/Box";
import BottomNavMaps from "../../components/BottomNavMaps.js";

//import Container from "@mui/material/Container";

export default function BlueyToursHome() {
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
        <BlueyTourTable />

        <BottomNavMaps />
      </Grid>
    </div>
  );
}
