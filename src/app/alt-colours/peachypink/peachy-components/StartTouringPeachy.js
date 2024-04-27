"use client";

import React from "react";
import Image from "next/image";
import "../pp-page.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import TourOptionsForm from "./TourOptionsChecklistPeachy.js";
import OpenBox from "../../../weather/OpenBox";


//the parent component of the form process
const SubTitle = () => {
  return (
    <Image
      src="/img/pp-welcome-sub-title.png"
      alt="What would you like to see on your tour?"
      width={300}
      height={120}
      priority
    />
  );
};
export {  SubTitle };

export default function StartTour({ onSubmit }) {
  const [state, setState] = useState({}); // State for form data

  const handleFormSubmit = (data) => {
    // Handle form submission logic here
    console.log("Form data submitted:", data);

    if (data.buildings && !data.statues && !data.landmarks) {
      window.location.href = "../peachy-welcome/peachy-tours/peachy-b";
    } else if (data.buildings && data.statues && !data.landmarks) {
      window.location.href = "../peachy-welcome/peachy-tours/peachy-b-s";
    } else if (data.buildings && data.statues && data.landmarks) {
      window.location.href = "../peachy-welcome/peachy-tours/peachy-b-l-s";
    } else if (data.statues && !data.landmarks && !data.buildings) {
      window.location.href = "../peachy-welcome/peachy-tours/peachy-s";
    } else if (data.statues && data.landmarks && !data.buildings) {
      window.location.href = ".../peachy-welcome/peachy-tours/peachy-l-s";
    } else if (data.landmarks && !data.statues && !data.buildings) {
      window.location.href = "../peachy-welcome/peachy-tours/peachy-l";
    } else if (data.landmarks && data.buildings && !data.statues) {
      window.location.href = "../peachy-welcome/peachy-tours/peachy-b-l";
    } else {
      window.location.href = "../peachy-welcome/peachy-tours/tour-alert";
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
        paddingTop={14}
      >
        <Grid
          container
          spacing={2}
          rowSpacing={0}
          item
          xs={12}
          paddingTop={4}
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
          paddingBottom={4}
          justifyContent="center"
        >
          <TourOptionsForm formData={state} onSubmit={handleFormSubmit} />
        </Grid>
        <OpenBox />
      </Grid>
    </Box>
  );
}
