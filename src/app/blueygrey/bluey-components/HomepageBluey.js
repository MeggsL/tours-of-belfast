"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Roboto } from 'next/font/google';
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from '@mui/material/Grid'; // Grid version 1
import "../blueygrey.css";
import "../bg-page.module.css";
import { brown } from "@mui/material/colors";
import ColourMenu from "../../components/ChangeColourMenu";

// setting the font
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

//the button for the soothing lilac experience
function GetStartedButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: brown[400],
      },
      secondary: {
        main: brown[800],
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
        main: brown[400],
      },
      secondary: {
        main: brown[800],
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
export { GetStartedButton, ChangeColourButton };

export default function BlueyGreyHomepage() {
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
          <Link href="./blueygrey/bluey-welcome">
            <GetStartedButton />
          </Link>
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-5} paddingTop={3} paddingBottom={6}>
        <ColourMenu />
        </Grid>
      </Container>
    </Box>
  );
}
