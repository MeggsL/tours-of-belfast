"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Oval from "react-loader-spinner";
import "./getweather.css";
//import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//import Alert from "@mui/material/Alert";

function App() {
  // const [input, setInput] = useState("");
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

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
     // params: {
      // q: input,
     //   units: "metric",
     //   lat: 54.596617288210005,
    //    lon: -5.930042286615252,
     //   appid: "708e98ba900f0f0b00a0560aaa10ae72"
    //  },
   /* .then((response) => {
      console.log(response);
      setWeather({ data: response.weather, loading: false, error: false });
    })}
    .catch((error) => {
      console.error("Error fetching the data: ", error)
      setWeather({ ...weather, data: {}, error: true });
    })*/
    
    };

     
  //call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);
  // }


  
  return (

    <Box height={300}
    width={400}
    my={4}
    display="flex"
    alignItems="center"
    gap={4}
    p={2}
   sx={{ border: "20x solid grey" }}>
   
   <div>
   {weather.map((data) => {
    return (
      <li className="app" key={data.id}>{data.weather.main}</li>
    )
   })}
   
   
   </div>



    </Box>
  );
};

export default App;

{/*}
return (

  <Box height={300}
  width={400}
  my={4}
  display="flex"
  alignItems="center"
  gap={4}
  p={2}
 sx={{ border: "20x solid grey" }}>
  <div className="App">
    <div className="weather-app">
  {/*}    <div className="loading">
        {weather.loading && (
          <Oval type="Oval" color="green" height={70} width={70}></Oval>
        )}
      </div>

      {weather.error && (
        <div className="error-message">
          <span>What the...</span>
        </div>
      )}

      {weather && weather.data && weather.data.main && (
        <div>
          <div className="city-name">
            <h2>
              {weather.data.name},<span>{weather.data.sys.country}</span>
            </h2>
          </div>

         {/*} <div className="icon-temp">
            <img
              src={
                "https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png"
              }
              alt=""
            ></img>
          </div>
            

          <div className="temp">
            {Math.round(weather.data.main.temp)}
            <sup className="deg">°C</sup>
          </div>

          <div className="feels-like">
            <p>Feels like: {weather.data.main.feels_like}</p>
          </div>
        </div>
      )}
    </div>
  </div>
  </Box>
);
};

export default App;
*/}