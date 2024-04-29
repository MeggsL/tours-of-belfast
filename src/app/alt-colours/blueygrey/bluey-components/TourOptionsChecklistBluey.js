import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Image from "next/image";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Roboto } from "next/font/google";
import { blue } from "@mui/material/colors";
import { brown } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import PlayCircleFilledWhiteTwoToneIcon from '@mui/icons-material/PlayCircleFilledWhiteTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

const BuildingCard = () => {
  return (
    <Image
      src="/img/selection-card-buildings-bluey.png"
      alt="Tour of Belfast"
      width={280}
      height={250}
      priority
    />
  );
};

const StatuesCard = () => {
  return (
    <Image
      src="/img/selection-card-statues-bluey.png"
      alt="Tour of Belfast"
      width={280}
      height={250}
      priority
    />
  );
};

const LandmarkCard = () => {
  return (
    <Image
      src="/img/selection-card-monuments-bluey.png"
      alt="Tour of Belfast"
      width={280}
      height={250}
      priority
    />
  );
};

export { BuildingCard, StatuesCard, LandmarkCard };

// setting the font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

//creating a bluey START TOUR button
function BlueButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: blue[900],
      },
      secondary: {
        main: blue[500],
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
        startIcon={<PlayCircleFilledWhiteTwoToneIcon />}
        sx={{ pl: 2, pr: 2, pt: 3, pb: 3 }}
      >

        Start Tour
      </Button>
    </ThemeProvider>
  );
}

//creating a bluey GO HOME button
function BlueHomeButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: blue[900],
      },
      secondary: {
        main: blue[500],
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
        type="button"
        startIcon={<HomeTwoToneIcon />}
        sx={{ pl: 2, pr: 2, pt: 3, pb: 3 }}
      >
        
        Go Home
      </Button>
    </ThemeProvider>
  );
}
export { BlueButton, BlueHomeButton };

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
            paddingTop={0}
            paddingBottom={2}
            alignItems={"center"}
            paddingLeft={0}
          >
            <FormLabel
              component="legend"
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                color: brown[600],
                textAlign: "center",
              }}
            >
              Please select at least one option.
            </FormLabel>
          </Grid>

          <FormGroup>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={2}>
                <Checkbox
                  checked={buildings}
                  onChange={handleChange}
                  name="buildings"
                  size="large"
                  position="0"
                  sx={{
                    color: blue[800],
                    "&.Mui-checked": {
                      color: blue[700],
                    },
                  }}
                />
              </Grid>

              <Grid item xs={10}>
                <BuildingCard />
              </Grid>

              <Grid item xs={2}>
                <Checkbox
                  checked={statues}
                  onChange={handleChange}
                  name="statues"
                  size="large"
                  sx={{
                    color: blue[800],
                    "&.Mui-checked": {
                      color: blue[700],
                    },
                  }}
                />
              </Grid>
              <Grid item xs={10}>
                <StatuesCard />
              </Grid>

              <Grid item xs={2}>
                <Checkbox
                  checked={landmarks}
                  onChange={handleChange}
                  name="landmarks"
                  size="large"
                  sx={{
                    color: blue[800],
                    "&.Mui-checked": {
                      color: blue[700],
                    },
                  }}
                />
              </Grid>
              <Grid item xs={10}>
                <LandmarkCard />
              </Grid>
            </Grid>
          </FormGroup>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ pt: 3 }}
          >
            <BlueButton />
            <Link href="../">
            <BlueHomeButton />
            </Link>

          </Stack>
        </FormControl>
      </Box>
    </form>
  );
}
