import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import YouMustSelect from "../../../peachy-components/PeachyTourSelectionAlert";
import "../../../peachypink.css";

export default function BlueMapOfS() {
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
        <YouMustSelect />
      </Grid>
    </Box>
  );
}
