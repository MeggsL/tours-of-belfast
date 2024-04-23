"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TButton from "./TourButton.js";
//import "../globals.css";
import "../page.module.css";
import Box from "@mui/material/Box";
//import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
//import BottomNavTours from "./BottomNavTours.js";
//import BottomNavMaps from "./BottomNavMaps.js";
import TourOptionsForm from "./TourOptionsChecklist.js";
import { redirect } from "next/navigation";
import Alert from "@mui/material/Alert";

//the parent component

const Title = () => {
  return (
    <Image
      //className={styles.logo}
      src="/img/purple-welcome.png"
      alt="Welcome"
      width={356}
      height={164}
      priority
    />
  );
};
export { Title };

export default function StartTour({ onSubmit }) {
  const [state, setState] = useState({}); // State for form data

  const handleFormSubmit = (data) => {
    // Handle form submission logic here
    console.log("Form data submitted:", data);

    if (data.buildings && !data.statues && !data.landmarks) {
      window.location.href = "../tours/purple-b";
    } else if (data.buildings && data.statues && !data.landmarks) {
      window.location.href = "../tours/purple-b-s";
    } else if (data.buildings && data.statues && data.landmarks) {
      window.location.href = "../tours/purple-b-l-s";
    } else if (data.statues && !data.landmarks && !data.buildings) {
      window.location.href = "../tours/purple-s";
    } else if (data.statues && data.landmarks && !data.buildings) {
      window.location.href = "../tours/purple-l-s";
    } else if (data.landmarks && !data.statues && !data.buildings) {
      window.location.href = "../tours/purple-l";
    } else if (data.landmarks && data.buildings && !data.statues) {
      window.location.href = "../tours/purple-b-l";
    } else {
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
          <Title />
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
      </Grid>
    </Box>
  );
}
