"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Roboto } from "next/font/google";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid"; // Grid version 1
import "../blueygrey.css";
import "../bg-page.module.css";
import { brown } from "@mui/material/colors";
import WelcomeCard from "./BlueyWelcomeCard";

// setting the font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

//the button for the soothing lilac experience
function TourSelectionsButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: brown[600],
      },
      secondary: {
        main: brown[900],
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
        sx={{padding: 2, pl:3, pr:3}}
      >
        Take me to tour selections
      </Button>
    </ThemeProvider>
  );
}

//exporting the buttons
export { TourSelectionsButton };

export default function BlueyWelcome() {
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
            src="/img/bg-welcome.png"
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
          <WelcomeCard />
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          rowSpacing={-5}
          paddingTop={2}
        >
          <Link href="./bluey-welcome/bluey-tours">
            <TourSelectionsButton />
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
