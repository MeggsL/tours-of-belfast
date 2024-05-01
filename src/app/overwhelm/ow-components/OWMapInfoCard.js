import React from "react";
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


export default function MapInfoCard() {
  return (
    <Box sx={{ pl: 3 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h6" color="text.primary" gutterBottom sx={{pt:2, mx:2}}>
            What do the symbols mean?
          </Typography>
          
          <Grid item xs={12} sx={{ mx: 16, pt: 2 }}>
            <span style={{ fontSize: "3rem" }}>☕️</span>
          </Grid>
          <Typography sx={{ mx: 12 }} variant="body2">
           Cafes and pubs
          </Typography>

          <Grid item xs={12} sx={{ mx: 16, pt: 1 }}>
            <span style={{ fontSize: "3rem" }}>🛋️</span>
          </Grid>
          <Typography sx={{ mx: 15 }} variant="body2">
            Benches
          </Typography>

          <Grid item xs={12} sx={{ mx: 15, pt: 4 }}>
            <span style={{ fontSize: "3rem" }}>🚻</span>
          </Grid>
          <Typography sx={{ mx: 13 }} variant="body2">
            Public toilets
          </Typography>

          <CardActions sx={{pt:4}}>
            <Link href="../">
              <Button size="small">Back to map</Button>
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}
