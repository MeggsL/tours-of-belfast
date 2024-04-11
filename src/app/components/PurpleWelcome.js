"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TransitionHover from "./StyledAvatarButton.js";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2"; 
import "../purple/purple.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

//import SelfImprovementTwoToneIcon from "@mui/icons-material/SelfImprovementTwoTone";

// children components

const Title = () => {
  return (
    <Image
      //className={styles.logo}
      src="/img/purple-welcome.png"
      alt="Welcome"
      width={300}
      height={427}
      priority
    />
  );
};

const BothCranes = () => {
  return (
    <Image
      // className={styles.logo}
      src="/img/cranes800x435.png"
      alt="Samson and Goliath"
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
      <Button variant="contained" size="large">
        Choose Your Tour
      </Button>
    </ThemeProvider>
  );
}

export { Title, BothCranes, PurpleButton };

export default function PurpleWelcome() {
  return (
    <Box xs={{ flexgrow: 1,  height: "100%" }}>
      <Container maxWidth="sm">
      <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="center"
          rowSpacing={0}
          paddingTop={4}
        >
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            rowSpacing={-4}
            paddingTop={3}
          >
          <Title />
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-1} paddingTop={2}>
          <BothCranes />
        </Grid>
        <Grid item xs={12} container justifyContent="center" rowSpacing={-4} paddingTop={3} >
        <Link href="/purple/purple-tours">
          <PurpleButton />
          </Link>
        </Grid>
        <Grid
            item
            xs={12}
            container
            justifyContent="center"
            rowSpacing={0}
            paddingTop={8}
          ></Grid>
      </Grid>
      </Container>
    </Box>
  );
}
