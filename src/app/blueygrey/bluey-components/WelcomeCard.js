import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function WelcomeCard() {
  return (
    <Box sx={{ pl: 3 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" color="text.primary" gutterBottom>
            So nice to see you!
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            A few notes to help get you on your way.
          </Typography>
          <Typography variant="body2">
            On the next screen you will be offered a list of attractions that
            can be included on your tour.
          </Typography>
          <br />
          <Typography variant="body2">
            Once you have made your selections and hit the 'Start Tour' button,
            your bespoke tour map will load.
          </Typography>
          <Typography
            sx={{ fontSize: 18, alignContent: "center" }}
            color="text.primary"
            gutterBottom
            paddingTop={5}
          >
           Happy touring!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
