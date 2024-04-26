import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { brown } from "@mui/material/colors";
import { amber } from "@mui/material/colors";

export default function WelcomeCard() {
  return (
    <Box sx={{ pl: 3 }}>
      <Card sx={{ minWidth: 275, mx:2, padding:2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 1.5 }} color={brown[400]}>
            'Bout ye!
          </Typography>
          <Typography variant="body2" color={brown[800]}>
            On the next screen you will be offered a list of attractions that
            can be included on your tour.
          </Typography>
          <br />
          <Typography variant="body2" color={brown[800]}>
            Once you have made your selections and hit the 'Start Tour' button,
            your bespoke tour map will load.
          </Typography>
          <Typography
            sx={{ fontSize: 18, alignContent: "center" }}
            gutterBottom
            paddingTop={3}
            color={amber[600]}
          >
            Happy touring!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}