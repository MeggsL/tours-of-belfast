import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MapInfoCard from "../../../bluey-components/BlueyMapInfoCard";
import "../../../blueygrey.css";

export default function BlueMapInfo() {
  return (
    <Box sx={{ width: 350, pt: 10 }}>
      <Grid
        item
        xs={12}
        sm={6}
        justifyContent="center"
        rowSpacing={0}
        padding={0}
      >
        <MapInfoCard />
      </Grid>
    </Box>
  );
}
