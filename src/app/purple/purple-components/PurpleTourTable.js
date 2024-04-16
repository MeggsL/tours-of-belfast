"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TButton from "../../components/TourButton.js";
//import "../globals.css";
import "../p-page.module.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//import BottomNavTours from "./BottomNavTours.js";
//import BottomNavMaps from "./BottomNavMaps.js";

// children components of images and buttons
const ImgOne = () => {
  return (
    <Link href={"./purple-tours/purple-buildings"}>
    <Image
      //className={styles.logo}
      src="/img/historic-buildings-tour.png"
      alt="Buildings Tour"
      width={250}
      height={210}
      priority
    />
    </Link>
  );
};

const ImgTwo = () => {
  return (
    <Link href={"./purple-tours/purple-landmarks"}>
    <Image
      //className={styles.logo}
      src="/img/landmarks-monuments-tour.png"
      alt="Landmarks Tour"
      width={250}
      height={210}
      priority
    />
    </Link>
  );
};

const ImgThree = () => {
  return (
    <Link href={"./purple-tours/purple-statues"}>
    <Image
      //className={styles.logo}
      src="/img/statues-artwork-tour.png"
      alt="Statues Tour"
      width={250}
      height={210}
      priority
    />
    </Link>
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

export default function PurpleTourTable() {
  return (
    <Box xs={{ flexgrow: 1, height: "100%" }}>
            <Container maxWidth="sm">

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
            <ImgOne />
          </Grid>
       {/*}   <Grid
            container
            spacing={2}
            rowSpacing={3}
            item
            xs={12}
            paddingTop={6}
            justifyContent="center"
          >
            <StartBuildingsTour />
  </Grid> */}
          <Grid
            container
            spacing={2}
            rowSpacing={-2}
            item
            xs={12}
            paddingTop={8}
            justifyContent="center"
          >
            <ImgTwo />
          </Grid>
         {/*} <Grid
            container
            spacing={2}
            rowSpacing={3}
            item
            xs={12}
            paddingTop={6}
            justifyContent="center"
          >
            <StartLandmarksTour />
  </Grid> */}
          <Grid
            container
            spacing={2}
            rowSpacing={-2}
            item
            xs={12}
            paddingTop={8}
            justifyContent="center"
          >
            <ImgThree />
          </Grid>
         {/*} <Grid
            container
            spacing={2}
            rowSpacing={3}
            item
            xs={12}
            paddingTop={6}
            justifyContent="center"
          >
            <StartStatuesTour />
</Grid> */}
 
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            rowSpacing={0}
            paddingTop={0}
          ></Grid>
        </Grid>
        </Container>
    </Box>
  );
}
