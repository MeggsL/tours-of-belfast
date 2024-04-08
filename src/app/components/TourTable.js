"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TButton from "../components/TourButton.js";
import "../globals.css";
import "../page.module.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BottomNavTours from "./BottomNavTours.js";


// children components of images and buttons
const ImgOne = () => {
  return (
    <Image
      //className={styles.logo}
      src="/buildings-tour.png"
      alt="Buildings Tour"
      width={300}
      height={310}
      priority
    />
  );
};

const ImgTwo = () => {
  return (
    <Image
      //className={styles.logo}
      src="/landmarks-tour.png"
      alt="Landmarks Tour"
      width={300}
      height={310}
      priority
    />
  );
};

const ImgThree = () => {
  return (
    <Image
      //className={styles.logo}
      src="/statues-tour.png"
      alt="Statues Tour"
      width={300}
      height={310}
      priority
    />
  );
};

const StartBuildingsTour = () => {
  return (
    <Link href={"./tours/buildings"}>
      <TButton />
    </Link>
  );
};

const StartLandmarksTour = () => {
  return (
    <Link href={"./tours/landmarks"}>
      <TButton />
    </Link>
  );
};

const StartStatuesTour = () => {
  return (
    <Link href={"./tours/statues"}>
      <TButton />
    </Link>
  );
};

export {
 // Item,
  ImgOne,
  ImgTwo,
  ImgThree,
  StartBuildingsTour,
  StartLandmarksTour,
  StartStatuesTour,
};

export default function TourTable() {
  return (
    <Box xs={{ flexgrow: 1, bgcolor: "#cfe8fc", height: "100vh" }}>
      <Container maxWidth="sm"></Container>
      <Grid container rowSpacing={4} justifyContent="center">
        <Grid item xs={12} container justifyContent="center">
        <ImgOne />
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-1}>
        <StartBuildingsTour />
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-2}>
        <ImgTwo />
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-2}>
        <StartLandmarksTour />
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-2}>
        <ImgThree />
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-2}>
        <StartStatuesTour />
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-2}>
<BottomNavTours />
        </Grid>
      </Grid>
      <Container />
    </Box>
  );
}