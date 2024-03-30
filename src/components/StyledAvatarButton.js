"use client";

import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#7d5fb2",
    },
    secondary: {
      main: "#d7a8df",
    },
  },
  
});

const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(2.5);
  }
  `}
`;

export default function TransitionHover() {
  return (
    <ThemeProvider theme={customTheme}>
      <StyledAvatar>GO</StyledAvatar>
    </ThemeProvider>
  );
}
