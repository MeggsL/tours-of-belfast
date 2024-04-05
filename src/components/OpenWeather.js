"use client";

import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

function GetWeather() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=54.5967&lon=-5.9300&appid=708e98ba900f0f0b00a0560aaa10ae72";

  const [data, setData] = useState([]);

  useEffect(() => {
    function Fetch() {
      url

        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
          console.log(data);
        });
    }
  }, []);

  return (
    <>
      <Container sx={{ width: "50%" }}>
        <Alert variant="outlined" severity="info">
          {data.map(
            (weather) => (
              //<div key={item.weather}>
              (<h2>Current Conditions</h2>),
              (<p>{weather.id}</p>),
              (<p>{weather.main}</p>),
              (<p>{weather.description}</p>),
              (<p>{weather.icon}</p>)
              //</div>
            )
          )}
        </Alert>
      </Container>
    </>
  );
}

export default GetWeather;
