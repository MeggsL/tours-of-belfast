import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import TheWeather from "./GetWeather";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { brown } from "@mui/material/colors";
import { Roboto } from "next/font/google";
import "../page.module.css";

// setting the font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

//creating a nice button
function WeatherButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: "#8d6e63",
      },
      secondary: {
        main: "#8d6e63",
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

  return (
    <ThemeProvider theme={ButtonColor}>
      <Button variant="contained" size="large" type="button">
        Check Weather
      </Button>
    </ThemeProvider>
  );
}
export { WeatherButton };

export default function WeatherPopper() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <div>
      <WeatherButton aria-describedby={id} onClick={handleClick}>
        Check Weather
      </WeatherButton>

      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
              <TheWeather />
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
