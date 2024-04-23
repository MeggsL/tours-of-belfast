import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import { Roboto } from "next/font/google";

// setting the font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

//the button for the soothing lilac experience
function PurpleButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: "#9e6abf",
      },
      secondary: {
        main: "#e0c6e7",
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

  return (
    <ThemeProvider theme={ButtonColor}>
      <Button
        variant="contained"
        size="large"
        type="Submit"
        sx={{ m: 1, pl: 3, pr: 3 }}
      >
        Start Tour
      </Button>
    </ThemeProvider>
  );
}
export { PurpleButton };

const PurpleTheme = createTheme({
  palette: {
    primary: {
      main: "#9e6abf",
    },
    secondary: {
      main: "#e0c6e7",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontWeight: 700,
  },
});
export { PurpleTheme };

//the child component

export default function TourOptionsForm({ onSubmit }) {
  const [state, setState] = useState({
    buildings: false,
    statues: false,
    artworks: false,
    landmarks: false,
    monuments: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { buildings, statues, artworks, landmarks, monuments } = state;
  const error =
    [buildings, statues, artworks, landmarks, monuments].filter((v) => v)
      .length !== 2;

  {
    /*}
  const handleChange = (event) => {
    const { checked, name } = event.target;
    setState(prevState =>( {
    ...prevState,
    [name]: type === 'checkbox' ? checked : value,
    }));
  };

  */
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected attractions:", state);
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex" }}>
        <FormControl
          sx={{ m: 3 }}
          fullWidth="true"
          component="fieldset"
          variant="standard"
          required="true"
          margin="normal"
        >
          <Grid
            paddingTop={0}
            paddingBottom={3}
            alignItems={"center"}
            paddingLeft={0}
          >
            <ThemeProvider theme={PurpleTheme}>
              <FormLabel component="legend" sx={{ fontWeight: "500" }}>
                What would you like to see on your tour?
              </FormLabel>
            </ThemeProvider>
          </Grid>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={buildings}
                  onChange={handleChange}
                  name="buildings"
                  sx={{
                    color: purple[800],
                    "&.Mui-checked": {
                      color: purple[600],
                    },
                  }}
                />
              }
              label="Historic Buildings"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={statues}
                  onChange={handleChange}
                  name="statues"
                  sx={{
                    color: purple[800],
                    "&.Mui-checked": {
                      color: purple[600],
                    },
                  }}
                />
              }
              label="Impressive Statues"
              color="primary"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={artworks}
                  onChange={handleChange}
                  name="artworks"
                  sx={{
                    color: purple[800],
                    "&.Mui-checked": {
                      color: purple[600],
                    },
                  }}
                />
              }
              label="Large-scale Artworks"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={landmarks}
                  onChange={handleChange}
                  name="landmarks"
                  sx={{
                    color: purple[800],
                    "&.Mui-checked": {
                      color: purple[600],
                    },
                  }}
                />
              }
              label="Notable Landmarks"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={monuments}
                  onChange={handleChange}
                  name="monuments"
                  sx={{
                    color: purple[800],
                    "&.Mui-checked": {
                      color: purple[600],
                    },
                  }}
                />
              }
              label="Impressive Monuments"
            />
          </FormGroup>

          <FormHelperText sx={{ m: 4 }}>
            *You must choose at least one option.
          </FormHelperText>

          <PurpleButton />
        </FormControl>
      </Box>
    </form>
  );
}
