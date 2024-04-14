"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//import TransitionHover from "./StyledAvatarButton.js";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2"; 
import "../blueygrey.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// children components

const Title = () => {
  return (
    <Image
      //className={styles.logo}
      src="/img/bg-welcome.png"
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

    />
  );
};

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
      <Button variant="contained" size="large">
        Choose Your Tour
      </Button>
    </ThemeProvider>
  );
}

export { Title, BothCranes, BlueyButton };

export default function PeachyWelcome() {
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
            <Link href="/tours">
              <BlueyButton />
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
