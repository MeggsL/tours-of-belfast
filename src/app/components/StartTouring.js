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

//the parent component

const Title = () => {
  return (
    <Image
      //className={styles.logo}
      src="/img/purple-welcome.png"
      alt="Welcome"
      width={356}
      height={250}
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

    if (
      data.buildings && !data.statues && !ata.landmarks && !data.monuments && !data.artworks) {
      window.location.href = "../tours/purple-b";
    } else if (
      data.buildings && data.statues && !data.landmarks && !data.monuments && !data.artworks) {
      window.location.href = "../tours/purple-b-s";
    } else if (
      data.buildings && data.statues && data.landmarks && !data.monuments && !data.artworks) {
      window.location.href = "../tours/purple-b-l-s";

    } else if (
      data.statues && !data.landmarks && !data.buildings && !data.monuments && !data.artworks) {
      window.location.href = "../tours/purple-s";
    } else if (
      data.statues && data.landmarks && !data.buildings && !data.monuments && !data.artworks) {
      window.location.href = "../tours/purple-l-s";
    } else if (
      data.landmarks && !data.statues && !data.buildings && !data.monuments && !data.artworks) {
      window.location.href = "../tours/purple-l";
    } else if (
      data.landmarks && data.buildings && !data.statues && !data.monuments && !data.artworks) {
      window.location.href = "../tours/purple-b-l";
    } else if (
      data.artworks && !data.landmarks && !data.buildings && !data.monuments && !data.statues) {
      window.location.href = "../tours/purple-s";
    } else if (
      data.monuments && !data.statues && !data.buildings && !data.landmarks && !data.artworks) {
      window.location.href = "../tours/purple-l";
    } else if (
      data.statues && data.landmarks && data.monuments && !data.buildings && !data.artworks) {
      window.location.href = "../tours/purple-l-s";

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
        paddingTop={2}
      >
        <Grid
          container
          spacing={2}
          rowSpacing={-2}
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
          rowSpacing={-2}
          item
          xs={12}
          paddingTop={4}
          justifyContent="center"
        >
          <TourOptionsForm formData={state} onSubmit={handleFormSubmit} />
        </Grid>
      </Grid>
    </Box>
  );
}


{/*
if (
      data.buildings === true &&
      (data.statues && data.landmarks && data.monuments && data.artworks) ===
        false
    ) {
      window.location.href = "../tours/purple-b";
    } else if (
      (data.buildings && data.statues) === true &&
      (data.landmarks && data.monuments && data.artworks) === false
    ) {
      window.location.href = "../tours/purple-b-s";
    } else if (
      (data.buildings && data.statues && data.landmarks) === true &&
      (data.monuments && data.artworks) === false
    ) {
      window.location.href = "../tours/purple-b-l-s";
    } else if (
      data.statues === true &&
      (data.landmarks && data.buildings && data.monuments && data.artworks) ===
        false
    ) {
      window.location.href = "../tours/purple-s";
    } else if (
      (data.statues && data.landmarks) === true &&
      (data.buildings && data.monuments && data.artworks) === false
    ) {
      window.location.href = "../tours/purplel-s";
    } else if (
      data.landmarks === true &&
      (data.statues && data.buildings && data.monuments && data.artworks) ===
        false
    ) {
      window.location.href = "../tours/purple-l";
    } else if (
      (data.landmarks && data.buildings) === true &&
      (data.statues && data.monuments && data.artworks) === false
    ) {
      window.location.href = "../tours/purple-b-l";
    } else if (
      data.artworks === true &&
      (data.landmarks && data.buildings && data.monuments && data.statues) ===
        false
    ) {
      window.location.href = "../tours/purple-s";
    } else if (
      data.monuments === true &&
      (data.statues && data.buildings && data.landmarks && data.artworks) ===
        false
    ) {
      window.location.href = "../tours/purple-l";

    } else {
      console.log("That didn't work.");
    }
  };}
*/}