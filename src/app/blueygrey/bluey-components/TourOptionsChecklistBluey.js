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
import { useState } from "react";
import { Roboto } from "next/font/google";
import { pink } from "@mui/material/colors";
import { brown } from "@mui/material/colors";

// setting the font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

//creating a pink button
function BlueButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: "#de66c3",
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
export { BlueButton };

//the child component of the form process

export default function TourOptionsForm({ onSubmit }) {
  const [state, setState] = useState({
    buildings: false,
    statues: false,
    landmarks: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { buildings, statues, landmarks } = state;
  const error = [buildings, statues, landmarks].filter((v) => v).length !== 2;

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
            paddingTop={4}
            paddingBottom={2}
            alignItems={"center"}
            paddingLeft={0}
          >
            <FormLabel
              component="legend"
              sx={{ fontWeight: "500", color: "white", textAlign: "center" }}
            >
              
            </FormLabel>
          </Grid>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={buildings}
                  onChange={handleChange}
                  name="buildings"
                  size="large"
                  sx={{
                    color: pink[400],
                    "&.Mui-checked": {
                      color: pink[600],
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
                  size="large"
                  sx={{
                    color: pink[400],
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
              }
              label="Statues and Large-scale Artworks"
              color="primary"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={landmarks}
                  onChange={handleChange}
                  name="landmarks"
                  size="large"
                  sx={{
                    color: pink[400],
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
              }
              label="Notable Landmarks and Monuments"
            />
          </FormGroup>

          <FormHelperText
            sx={{
              m: 4,
              fontWeight: "500",
              color: brown[900],
              textAlign: "center",
            }}
          >
            *You must choose at least one option.
          </FormHelperText>

          <BlueButton />
        </FormControl>
      </Box>
    </form>
  );
}
