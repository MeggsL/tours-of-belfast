"use client";

import React from "react";
import "../overwhelm.css";
import "../../page.module.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RouteTwoToneIcon from "@mui/icons-material/RouteTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "next/link";
import Image from "next/image";
import HelpOutlineTwoToneIcon from "@mui/icons-material/HelpOutlineTwoTone";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

export default function OWBottomNav() {
  const [value, setValue] = React.useState(0);

  const theme = createTheme({
    components: {
      BottomNavigation,
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === "contained" &&
              ownerState.color === "primary" && {
                backgroundColor: "transparent",
                color: "#fff",
              }),
          }),
        },
      },
    },
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ height: "5vh" }} alignContent={"center"} alignItems={"center"}>
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
              <Link href={"../../../"}>
                <HomeTwoToneIcon />
              </Link>
            }
          />
          [map info]
          <BottomNavigationAction
            label="Info"
            icon={
              <Link href={"./ow-map-info"}>
                <HelpOutlineTwoToneIcon />
              </Link>
            }
          />
          [back to tour selections]
          <BottomNavigationAction
            label="Chill Options"
            icon={
              <Link href={"../"}>
                <RouteTwoToneIcon />
              </Link>
            }
          />
        </BottomNavigation>
      </Box>
    </React.Fragment>
  );
}
