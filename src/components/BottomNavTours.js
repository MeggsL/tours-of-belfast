"use client";

import React from "react";
//import "../app/globals.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import DoNotDisturbOnTotalSilenceTwoToneIcon from '@mui/icons-material/DoNotDisturbOnTotalSilenceTwoTone';
import RouteTwoToneIcon from '@mui/icons-material/RouteTwoTone';
import WhereToVoteTwoToneIcon from '@mui/icons-material/WhereToVoteTwoTone';
//import WcTwoToneIcon from '@mui/icons-material/WcTwoTone';
//import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";
import Link from "next/link";

export default function BottomNavTours() {
  const [value, setValue] = React.useState(0);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#6a5579", height: "5vh" }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >

            [weather]
            <BottomNavigationAction label="" icon={<WbSunnyTwoToneIcon />} />

            [where am i?]
            <BottomNavigationAction label="" icon={<WhereToVoteTwoToneIcon />} />

            [the overwhelm button]
            <BottomNavigationAction label="" icon={<Link href={"/tours/overwhelm"}>{<DoNotDisturbOnTotalSilenceTwoToneIcon />}</Link>} />

          </BottomNavigation>
        </Box>
      </Container>
    </React.Fragment>
  );
}