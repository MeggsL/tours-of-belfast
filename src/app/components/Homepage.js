"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TransitionHover from "../components/StyledAvatarButton.js";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import SelfImprovementTwoToneIcon from "@mui/icons-material/SelfImprovementTwoTone";
import FilterVintageTwoToneIcon from "@mui/icons-material/FilterVintageTwoTone";

//import Paper from "@mui/material/Paper";
//import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import "../globals.css";
import "../page.module.css";

//the button for the soothing lilac experience
function PurpleButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: "#e0c6e7",
      },
      secondary: {
        main: "#e0c6e7",
      },
    },
  });

  return (
    <ThemeProvider theme={ButtonColor}>
      <Button
        variant="contained"
        size="large"
   //     startIcon={<SelfImprovementTwoToneIcon />}
      >
        Soothing Lilacs
      </Button>
    </ThemeProvider>
  );
}

//the button for the peachy pink experience
function PeachyButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: "#dcbfba",
      },
      secondary: {
        main: "#dcbfba",
      },
    },
  });

  return (
    <ThemeProvider theme={ButtonColor}>
      <Button
        variant="contained"
        size="large"
   //     startIcon={<FilterVintageTwoToneIcon />}
      >
        Peachy Pinks
      </Button>
    </ThemeProvider>
  );
}

//the button for the cooling blues experience
function BlueyButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: "#8bd6f3",
      },
      secondary: {
        main: "#8bd6f3",
      },
    },
  });

  return (
    <ThemeProvider theme={ButtonColor}>
      <Button
        variant="contained"
        size="large"
      //  startIcon={<AcUnitTwoToneIcon />}
      >
        Cooling Blues
      </Button>
    </ThemeProvider>
  );
}
//exporting the buttons
export { PurpleButton, PeachyButton, BlueyButton };

export default function ToursOfBelfast() {
  return (
    <Box xs={{ flexgrow: 1, height: "100%" }}>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          rowSpacing={3}
          item
          xs={12}
          paddingTop={12}
          justifyContent="center"
        >
          <Image
            //className={styles.logo}
            src="/img/home-title.png"
            alt="Tour of Belfast"
            width={356}
            height={250}
            priority
          />
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-5} paddingTop={3}>
          <h2 align="center ">Please select your colour experience.</h2>
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-5} paddingTop={6}>
          <Link href="/purple">
            <PurpleButton />
          </Link>
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-5}>
          <Link href="/peachypink">
            <PeachyButton />
          </Link>
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-5}>
          <Link href="/blueygrey">
            <BlueyButton />
          </Link>
        </Grid>

        <Grid item xs={12} container justifyContent="center" rowSpacing={-2}>
   
        </Grid>
        {/*row to create white space between button and bottom or screen*/}
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          rowSpacing={-5}
        ></Grid>
      </Container>
    </Box>
  );
}
