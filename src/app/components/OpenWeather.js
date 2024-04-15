"use client";

import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";


function GetWeather() {
    // const [input, setInput] = useState("");
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });
{/*
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
*/}

// function to fetch data using Axios
const fetchData = async () => {
  try{
  const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=54.596617288210005&lon=-5.930042286615252&appid=708e98ba900f0f0b00a0560aaa10ae72")
  console.log(response);
  setWeather({ data: response.weather, loading: false, error: false });
  }catch (error){
    console.error("Error fetching the data: ", error)
    setWeather({ ...weather, data: {}, error: true });
  }
  
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container sx={{ width: "70%" }}>
 
          {data.map(
            (weather) => (
              <div key={item.weather}>
              (<h2>Current Conditions</h2>),
              (<p>{weather.id}</p>),
              (<p>{weather.main}</p>),
              (<p>{weather.description}</p>),
              (<p>{weather.icon}</p>)
              </div>
            )
          )}

      </Container>
    </>
  );
}

export default GetWeather;
