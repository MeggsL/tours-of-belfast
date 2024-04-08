"use client";

import React from "react";
//import Button from 'react-bootstrap/Button';
//import "../app/globals.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
//import { Palette } from "@mui/icons-material";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";


const PurpleColor = createTheme({
  palette: {
    primary: purple,
  },
});

function MenuIcon() {
  return (
    <ThemeProvider theme={PurpleColor}>
      <Button>
        <MenuTwoToneIcon />
      </Button>
    </ThemeProvider>
  );
}

export default MenuIcon;