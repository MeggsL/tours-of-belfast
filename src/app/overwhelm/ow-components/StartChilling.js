"use client";

import React from "react";
import Image from "next/image";
import "../overwhelm.css";
import "../../page.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import TourOptionsForm from "./OWOptionsChecklist.js";
import OpenBox from "../../components/weather/OpenBox";


//the parent component

const SubTitle = () => {
  return (
    <Image
      src="/img/take-a-break.png"
      alt="How would you like to take a break?"
      width={300}
      height={184}
      priority
    />
  );
};
export {  SubTitle };

export default function AndRelax({ onSubmit }) {
  const [state, setState] = useState({}); // State for form data

  const handleFormSubmit = (data) => {
    // Handle form submission logic here
    console.log("Form data submitted:", data);

    if (data.benches && !data.cafes && !data.toilets) {
      window.location.href = "../overwhelm/ow-maps/ow-maps-b";
    } else if (!data.benches && data.cafes && !data.toilets) {
      window.location.href = "../overwhelm/ow-maps/ow-maps-c";
    } else if (!data.benches && !data.cafes && data.toilets) {
      window.location.href = "../overwhelm/ow-maps/ow-maps-t";
    } else if (data.benches && data.cafes && !data.toilets) {
      window.location.href = "../overwhelm/ow-maps/ow-maps-b-c";
    } else if (data.benches && !data.cafes && data.toilets) {
      window.location.href = "../overwhelm/ow-maps/ow-maps-b-t";
    } else if (!data.benches && data.cafes && data.toilets) {
      window.location.href = "../overwhelm/ow-maps/ow-maps-c-t";
    } else if (data.benches && data.cafes && data.toilets) {
      window.location.href = "../overwhelm/ow-maps/ow-maps-all";
    } else {
      window.location.href = "./overwhelm/ow-alert";
      console.log("That didn't work.");
    }
  };

  return (
    <Box xs={{ flexgrow: 1, height: "100%" }}>
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        rowSpacing={0}
        paddingTop={16}
      >
        <Grid
          container
          spacing={2}
          rowSpacing={0}
          item
          xs={12}
          paddingTop={0}
          justifyContent="center"
        >
          <SubTitle />
        </Grid>
        <Grid
          container
          spacing={2}
          rowSpacing={0}
          item
          xs={12}
          paddingTop={0}
          paddingBottom={0}
          justifyContent="center"
        >
          <TourOptionsForm formData={state} onSubmit={handleFormSubmit} />
        </Grid>

<OpenBox />
      </Grid>
    </Box>
  );
}
