"use client"

import React from "react";
//import Button from 'react-bootstrap/Button';
//import "../app/globals.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
//import { Palette } from "@mui/icons-material";


const ButtonColor = createTheme({
  palette: {
    primary: purple,
  },
});

function HomeButton() {
  return (
    <ThemeProvider theme={ButtonColor}>
      <Button variant="outlined" size="large">
        Let's go!
      </Button>
    </ThemeProvider>
  );
}

export default HomeButton;

