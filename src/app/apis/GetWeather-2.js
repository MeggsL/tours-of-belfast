"use client";

import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import GetData from "./GetWeather.js";

export default function DisplayWeather() {
  return (
    <div>
      {GetData.map((post) => (
        <div key={post.id}>
          <h2>{post.name}</h2>
          <p>{post.weather}</p>
        </div>
      ))}
    </div>
  );
}

/*
//const weatherItems = setData.map(([name, weather.main, weather.description, main.feels_like, main.temp_min]) => ({


}))

}
/*
export default function Weather(props) {
  const [data, setData] = useState(null);

  // const weatherItems = setData.map((weather) => <li key={setData.weather.id}>{weather}</li>);
  return (
    <div className="Weather">
      <Container sx={{ width: "70%" }}>
        <GetData setData={setData} />
        {data.map((items) => {
          {
            /* Render data here 
          }
          <Alert
            variant="outlined"
            severity="info"
            key={items.weather.id}
            content={
              items.name + items.weather.main + items.weather.description
            }
          >
            <div key={items.weather.id}>
              <h2>Current Conditions</h2>
              <p>{items.name}</p>
              <p>{items.weather.main}</p>
              <p>{items.weather.description}</p>
              <p>{items.main.feels_like}</p>
              <p>{items.main.temp_min}</p>
            </div>
          </Alert>;
        })}
      </Container>
    </div>
  );
}
*/
