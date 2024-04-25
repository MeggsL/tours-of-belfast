import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function MapInfoCard() {
  return (
    <Box sx={{ pl: 3 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h6" color="text.primary" gutterBottom sx={{pt:2, mx:2}}>
            What do the symbols mean?
          </Typography>

          <Typography variant="body2">
            <Grid item xs={12} sx={{ mx: 15, pt: 2 }}>
              <span style={{ fontSize: "3rem" }}>🗿</span>
            </Grid>

            <Grid item xs={12} sx={{ mx: 7 }}>
              Landmarks and monuments
            </Grid>
          </Typography>
          <br />
          <Typography variant="body2">
          <Grid item xs={12} sx={{ mx: 15, pt: 1 }}>
              <span style={{ fontSize: "3rem" }}>🗽</span>
            </Grid>

            <Grid item xs={12} sx={{ mx: 10 }}>
              Statues and artworks
            </Grid>
          </Typography>

          <Typography variant="body2">
          <Grid item xs={12} sx={{ mx: 15, pt:4 }}>
              <span style={{ fontSize: "3rem" }}>🏛️</span>
            </Grid>

            <Grid item xs={12} sx={{ mx: 11 }}>
             Historic buildings
            </Grid>
          </Typography>
          <CardActions sx={{pt:4}}>
            <Link href="./">
              <Button size="small">Back to map</Button>
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}
