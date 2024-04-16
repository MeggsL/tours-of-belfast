import * as React from 'react';
import Box from '@mui/material/Box';
import { Alert, IconButton, Collapse, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./openbox.css";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CurrentWeather from './GetWeather';


export default function OpenBox() {

    const [open, setOpen] = useState(false);
    const AlertBoxColour = createTheme({
        palette: {
          primary: {
            main: "#8e5dac",
          },
          secondary: {
            main: "#d7a8df",
          },
        },
      });

      const ButtonColor = createTheme({
        palette: {
          primary: {
            main: "#8e5dac",
          },
          secondary: {
            main: "#d7a8df",
          },
        },
      });

    return (

<div className="alertbox">
<Box maxWidth={"100%"} alignContent={"center"}>
  <Collapse in={open}>
    <ThemeProvider theme={AlertBoxColour}>
      <Alert
        severity="info" //set to "info" if the matching background wanted. Have removed so weather display can be customised.
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
      <CurrentWeather />

      </Alert>
    </ThemeProvider>
  </Collapse>
  <ThemeProvider theme={ButtonColor}>
  <Grid paddingTop={6} paddingLeft={2}>
    <Button
      disabled={open}
      variant="contained"
      onClick={() => {
        setOpen(true);
      }}
    >
    
    Weather
  
    </Button>
    </Grid>
  </ThemeProvider>
</Box>
</div>
    )
};