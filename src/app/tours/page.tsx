import React from "react";
import TourTable from "../components/TourTable.js";
//import BottomNavTours from "../components/BottomNavTours.js";
import styles from "../page.module.css";
import "../globals.css";
import "../page.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BottomNavMaps from "../components/BottomNavMaps.js";

export default function Home() {
  return (
    <Box>
      <Grid item container rowSpacing={0} padding={0}>
        <TourTable />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        justifyContent="center"
        rowSpacing={0}
        padding={0}
        position={"fixed"}
      >
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
