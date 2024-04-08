"use client";

import React from "react";

import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import RocketLaunchTwoToneIcon from "@mui/icons-material/RocketLaunchTwoTone";

//import "../app/globals.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

const ButtonColor = createTheme({
  palette: {
    primary: {
      main: "#7d5fb2",
    },
    secondary: {
      main: "#d7a8df",
    },
  },
});

function TButton() {
  return (
    <ThemeProvider theme={ButtonColor}>
      <Button
        variant="outlined"
        size="large"
        startIcon={<RocketLaunchTwoToneIcon />}
      >
        Start Tour
      </Button>
    </ThemeProvider>
  );
}

export default TButton;
