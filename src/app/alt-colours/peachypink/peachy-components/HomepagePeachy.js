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
import "../peachypink.css";
import "../pp-page.module.css";
import ColourMenu from "../../../components/ChangeColourMenu";
import { pink } from "@mui/material/colors";

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
        main: pink[400],
      },
      secondary: {
        main: pink[600]
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
        sx={{pl:4, pr:4}}

      >
        Let's get started
      </Button>
    </ThemeProvider>
  );
}


//exporting the buttons
export { GetStartedButton };

export default function PeachyPinkHomepage() {
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
            src="/img/pp-home-title.png"
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
            src="/img/cranes356x194.png"
            alt="Samson and Goliath"
            width={356}
            height={194}
            priority
          />
        </Grid>
   
        <Grid item xs={12} container justifyContent="center" rowSpacing={-5} paddingTop={4}>
          <Link href="./peachypink/peachy-welcome">
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
