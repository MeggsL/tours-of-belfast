"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TransitionHover from "./StyledAvatarButton.js";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../purple/purple.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import SelfImprovementTwoToneIcon from "@mui/icons-material/SelfImprovementTwoTone";


// children components

const Title = () => {
  return (
    <Image
      //className={styles.logo}
      src="/img/purple-welcome.png"
      alt="Tour of Belfast"
      width={356}
      height={360}
      priority
    />
  );
};

const BothCranes = () => {
  return (
    <Image
      // className={styles.logo}
      src="/cranes800x435.png"
      alt="Tours of Belfast"
      width={400}
      height={218}
      priority
    />
  );
};

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

      >
       Choose Tour
      </Button>
    </ThemeProvider>
  );
}

export { Title, BothCranes, PurpleButton };

export default function PurpleWelcome() {
  return (
    <Box xs={{ flexgrow: 1, bgcolor: "#cfe8fc", height: "100vh" }}>
      <Container maxWidth="sm"></Container>
      <Grid container rowSpacing={4} justifyContent="center">
        <Grid item xs={12} container justifyContent="center">
          <Title />
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-1}>
          <BothCranes />
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-2}>
    <PurpleButton />
        </Grid>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          rowSpacing={-5}
        ></Grid>
      </Grid>
      <Container />
    </Box>
  );
}
