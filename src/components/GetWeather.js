"use client";

import React, { useEffect } from "react";
import axios from 'axios';
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const GetWeather = async (weather: String) => {
  const result = await.get<SingleWeatherResponse>(
    http://api.openweathermap.org/data/2.5/weather?lat=54.596747841427444&lon=-5.930042284658504&appid=708e98ba900f0f0b00a0560aaa10ae72
  )
}
 
  $.ajax({
    url: 'get-weather.php',
    success: function(result) {
      var current = result.weather;
      console.log(weather);
    }
  })

  return (
    <Stack sx={{ width: "50%" }} spacing={2}>
      <Alert variant="outlined" severity="info">
      <Grid container rowSpacing={4} justifyContent="center">
        <Grid item xs={12} container justifyContent="center">
        <th>Right now</th>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
              <tr>
                <td>current</td>
              </tr>
               
        </Grid>
        </Grid>
      
      </Alert>
    </Stack>
  );
}

export default GetWeather;
