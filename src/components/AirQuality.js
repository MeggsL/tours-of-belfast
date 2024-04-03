"use client";

import React, { useState, useEffect } from "react";

function GetAirQuality() {

  const airquality,
  const setAirquality = useState(null);

  useEffect(() => {
    fetch("https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyDObDgKYzGwhc3ozZH4wYLLFApwsuOM9Iw", {
      method: "GET",
      headers: {
         //   "latitude": 54.596747841427444,
          //  "longitude": -5.930042284658504,
         //   "languageCode": "en",
         //   "content type": application/JSON;
    //  },
   //   {
        "location": {
          object (lat: 54.596747841427444, lng: -5.930042284658504 )
        },
        "uaqiColorPalette": enum (ColorPalette),
        "languageCode": "en"
      }

    })
      .then((response) => response.json())
      .then((data) => {
        setAirquality(data[0].airquality);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <div>
      <h2>Current air quality:</h2>
      {airquality ? <pre>{JSON.stringify(airquality, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}
export default GetAirQuality;