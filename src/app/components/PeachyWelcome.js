"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
//import Box from "@mui/material/Box";
//import Container from "@mui/material/Container";
//import TransitionHover from "./StyledAvatarButton.js";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import "../peachypink/peachypink.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import FilterVintageTwoToneIcon from "@mui/icons-material/FilterVintageTwoTone";
//import BottomNavTours from "./BottomNavTours.js";
import ".././peachypink/peachypink.css";

// children components

const Title = () => {
  return (
    <Image
      //className={styles.logo}
      src="/img/pp-welcome.png"
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

//the button for the peachy pink experience
function PeachyButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: "#f2cba6",
      },
      secondary: {
        main: "#f2cba6",
      },
    },
  });

  return (
    <ThemeProvider theme={ButtonColor}>
      <Button
        variant="contained"
        size="large"
        startIcon={<FilterVintageTwoToneIcon />}
      >
  Choose Tour
      </Button>
    </ThemeProvider>
  );
}

export { Title, BothCranes, PeachyButton };

export default function PeachyWelcome() {
  return (
    <Grid
      item
      xs={12}
      container
      spacing={2}
      justifyContent="center"
      rowSpacing={-2}
    >
      <Grid item xs={12} container justifyContent="center" rowSpacing={-4}>
        <Title />
      </Grid>
      <Grid item xs={12} container justifyContent="center" rowSpacing={-1}>
        <BothCranes />
      </Grid>
      <Grid item xs={12} container justifyContent="center" rowSpacing={-4}>
        <Link href="/tours">
          <PeachyButton />
        </Link>
      </Grid>

      <Grid
        item
        xs={12}
        container
        justifyContent="center"
        rowSpacing={-1}
      ></Grid>
    </Grid>
  );
}
