import React from "react";
import TourTable from "../../components/TourTable.js";
//import BottomNavTours from "../components/BottomNavTours.js";
import "../../peachypink/peachypink.css";
import "../../page.module.css";
import Grid from "@mui/material/Grid";
//import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import BottomNavMaps from "../../components/BottomNavMaps.js";

import Container from "@mui/material/Container";

export default function Home() {
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
        <TourTable />

        <BottomNavMaps />
      </Grid>
    </div>
  );
}
