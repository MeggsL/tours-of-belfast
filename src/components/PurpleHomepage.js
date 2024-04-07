"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";
import "../app/page.module.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TransitionHover from "../components/StyledAvatarButton.js";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// children components

const Title = () => {
  return (
    <Image
      //className={styles.logo}
      src="/home-title356x360.png"
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

export { Title, BothCranes };

export default function PurpleHomepage() {
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
          {" "}
          <Link href="/tours">
            {" "}
            <TransitionHover />
          </Link>
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
