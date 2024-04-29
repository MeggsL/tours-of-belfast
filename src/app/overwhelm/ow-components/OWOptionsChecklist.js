import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import "../overwhelm.css";
import Stack from "@mui/material/Stack";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import SelfImprovementTwoToneIcon from "@mui/icons-material/SelfImprovementTwoTone";

const BenchCard = () => {
  return (
    <Image
      src="/img/benches.png"
      alt="Tour of Belfast"
      width={280}
      height={250}
      priority
    />
  );
};

const ToiletsCard = () => {
  return (
    <Image
      src="/img/toilets.png"
      alt="Tour of Belfast"
      width={280}
      height={250}
      priority
    />
  );
};

const CafesCard = () => {
  return (
    <Image
      src="/img/cozy-cafes.png"
      alt="Tour of Belfast"
      width={280}
      height={250}
      priority
    />
  );
};

export { ToiletsCard, BenchCard, CafesCard };

// setting the font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

//button to launch the grey Overwhelm map with selection chill spots
function ChillButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: grey[800],
      },
      secondary: {
        main: grey[500],
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
        startIcon={<SelfImprovementTwoToneIcon />}
        sx={{ m: 1, pl: 2, pr: 2, pt: 2, pb: 2 }}
      >
        Show me chill spots
      </Button>
    </ThemeProvider>
  );
}

//creating a grey GO HOME button
function GreyHomeButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: grey[800],
      },
      secondary: {
        main: grey[500],
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
        sx={{ pl: 2, pr: 2, pt: 2, pb: 2 }}
      >
        Go Home
      </Button>
    </ThemeProvider>
  );
}

export { ChillButton, GreyHomeButton };

//the child component

export default function ChillOptionsForm({ onSubmit }) {
  const [state, setState] = useState({
    benches: false,
    cafes: false,
    toilets: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { benches, cafes, toilets } = state;
  const error = [benches, cafes, toilets].filter((v) => v).length !== 2;

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
                color: grey[800],
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
                  checked={cafes}
                  onChange={handleChange}
                  name="cafes"
                  size="large"
                  sx={{
                    color: grey[800],
                    "&.Mui-checked": {
                      color: grey[600],
                    },
                  }}
                />
              </Grid>

              <Grid item xs={10}>
                <CafesCard />
              </Grid>

              <Grid item xs={2}>
                <Checkbox
                  checked={benches}
                  onChange={handleChange}
                  name="benches"
                  size="large"
                  sx={{
                    color: grey[800],
                    "&.Mui-checked": {
                      color: grey[600],
                    },
                  }}
                />
              </Grid>
              <Grid item xs={10}>
                <BenchCard />
              </Grid>

              <Grid item xs={2}>
                <Checkbox
                  checked={toilets}
                  onChange={handleChange}
                  name="toilets"
                  size="large"
                  sx={{
                    color: grey[800],
                    "&.Mui-checked": {
                      color: grey[600],
                    },
                  }}
                />
              </Grid>

              <Grid item xs={10}>
                <ToiletsCard />
              </Grid>
            </Grid>
          </FormGroup>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ pt: 3 }}
          >
            <ChillButton />
            <Link href="../">
              <GreyHomeButton />
            </Link>
          </Stack>
        </FormControl>
      </Box>
    </form>
  );
}
