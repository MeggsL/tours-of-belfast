"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Roboto } from 'next/font/google';
//import TransitionHover from "../components/StyledAvatarButton.js";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
//import SelfImprovementTwoToneIcon from "@mui/icons-material/SelfImprovementTwoTone";
//import FilterVintageTwoToneIcon from "@mui/icons-material/FilterVintageTwoTone";

//import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid'; // Grid version 1
import "../globals.css";
import "../page.module.css";
import PurpleTheme from "../components/PurpleTheme.js";

// setting the font
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

//the button for the soothing lilac experience
function GoldieButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: "#8e5dac",
      },
      secondary: {
        main: "#8e5dac",
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

  return (
    <ThemeProvider theme={ButtonColor}>
      <Button
        variant="contained"
        size="large"
   //     startIcon={<SelfImprovementTwoToneIcon />}
      >
        Let's get started
      </Button>
    </ThemeProvider>
  );
}

//the button for the peachy pink experience
function ChangeColourButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
      secondary: {
        main: "#ffffff",
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

  return (
    <ThemeProvider theme={ButtonColor}>
      <Button
        variant="outlined"
        size="large"
   //     startIcon={<FilterVintageTwoToneIcon />}
      >
       Change Colour Theme
      </Button>
    </ThemeProvider>
  );
}


//exporting the buttons
export { GoldieButton, ChangeColourButton };

export default function Homepage() {
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
            height={200}
            priority
          />
        </Grid>
        <Grid
          container
          spacing={2}
          rowSpacing={3}
          item
          xs={12}
          paddingTop={6}
          paddingBottom={2}
          justifyContent="center"
        >
          <Image
            //className={styles.logo}
            src="/img/cranes800x435.png"
            alt="Samson and Goliath"
            width={356}
            height={250}
            priority
          />
        </Grid>
   
        <Grid item xs={12} container justifyContent="center" rowSpacing={-5} paddingTop={4}>
          <Link href="/tours">
            <GoldieButton />
          </Link>
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-5} paddingTop={3} paddingBottom={6}>
          <Link href="">
            <ChangeColourButton />
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
