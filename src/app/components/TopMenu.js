"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//import createTheme from "@mui/material/styles";
import ThemeProvider from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import WeekendIcon from '@mui/icons-material/Weekend';
import FloatingButton from "./FloatingButton";
// Using the MUI Positioned Menu component with modifications

const ButtonColor = () =>
  createTheme({
    palette: {
      primary: {
        main: "#6fbed9",
      },
      secondary: {
        main: "#5db1d2",
      },
    },
  });

const AlertBoxColour = () =>
  createTheme({
    palette: {
      primary: {
        main: "#7d5fb2",
      },
      secondary: {
        main: "#d7a8df",
      },
    },
  });
export { ButtonColor, AlertBoxColour };

export default function UpTopMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="alertbox">
      <Box maxWidth={"50%"}>
        <Collapse in={open}>
        <ThemeProvider theme={AlertBoxColour}>
          <Alert
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <h2>Need a break?</h2>
      
      
            </Alert>
          </ThemeProvider>
        </Collapse>
        <ThemeProvider theme={ButtonColor}>
          <Button
            disabled={open}
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          >
            Route Info
          </Button>
        </ThemeProvider>
      </Box>
    </div>
  );
}
