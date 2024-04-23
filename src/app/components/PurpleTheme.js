import React from "react";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

// setting the font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

//creating the theme

const PurpleTheme = createTheme({
  palette: {
    primary: {
      main: "#e0c6e7",
    },
    secondary: {
      main: "#e0c6e7",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export { PurpleTheme };
