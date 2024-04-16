"use client";

import React from "react";
import "../globals.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import DoNotDisturbOnTotalSilenceTwoToneIcon from "@mui/icons-material/DoNotDisturbOnTotalSilenceTwoTone";
import RouteTwoToneIcon from "@mui/icons-material/RouteTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import WhereToVoteTwoToneIcon from "@mui/icons-material/WhereToVoteTwoTone";
//import WcTwoToneIcon from '@mui/icons-material/WcTwoTone';
//import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
//import { useEffect } from "react";
import Link from '@mui/material/Link';
//import ThemeProvider from "@mui/material/styles";
import WeekendIcon from '@mui/icons-material/Weekend';
import Image from 'next/image';

export default function BottomNavMaps() {
  const [value, setValue] = React.useState(0);

  const theme = createTheme({
    components: {
      BottomNavigation,
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'primary' && {
                backgroundColor: "transparent",
                color: '#fff',
              }),
          }),
        },
      },
    },
  });


  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ height: "5vh" }} alignContent={"center"} alignItems={"center"} >
        <BottomNavigation
          showLabels
          className={"MuiBottomNavigation-root"}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          [home]
          <BottomNavigationAction
            label="Home"
            icon={
              <Link href={"../"}>
                <HomeTwoToneIcon />
              </Link>
            }
          />
          [tour home]
          <BottomNavigationAction
            label="Tours"
            icon={
              <Link href={"/tours"}>
                <RouteTwoToneIcon />
              </Link>
            }
          />
          [weather]
          <BottomNavigationAction
            label="Weather"
            icon={
              <Link href={""}>
                <WbSunnyTwoToneIcon />
              </Link>
            }
            />
            [break time]
            <BottomNavigationAction
              label=""
              icon={
                <Link  href={"../../overwhelm"}>
                  <Image width={48} height={48} src="/img/break-time.png" alt="break time!" />
                </Link>
              }

          />
        </BottomNavigation>
      </Box>
    </React.Fragment>
  );
}
