import React from "react";
import PurpleTourTable from "../purple-components/PurpleTourTable.js";
//import BottomNavTours from "../components/BottomNavTours.js";
//import styles from "../page.module.css";
//import "../purple.css";
import "./purple-tours.css";
import "../p-page.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PurpleBottomNavMaps from "../purple-components/PurpleBottomNavMaps.js";

export default function PurpleToursHome() {
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
        <PurpleTourTable />
      </Grid>
      <PurpleBottomNavMaps />
    </Box>
  );
}
