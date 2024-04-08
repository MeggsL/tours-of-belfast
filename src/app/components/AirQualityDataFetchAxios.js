"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

<header>
Accept: text/html
Cookie: Version=1
</header>

const AirQuality = () => {
  const [air, setAir] = useState([]);

  useEffect (() => {
    axios.get('https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyDObDgKYzGwhc3ozZH4wYLLFApwsuOM9Iw')
    .then(response => setAir(response.data))
    .catch(error => console.error('Error fetching air quality:', error));

  },[]);

  return (
    <div>
      {/* Display the fetched air data */}
      {air.map(user => (
        <div key={air.id}>(air.name)</div>
      ))}
    </div>
  )
}

export default AirQuality;