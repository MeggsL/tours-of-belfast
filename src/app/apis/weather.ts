import React, { useEffect, useState } from "react";

type RawWeather = [string, number, number, string];

type Weather = {
    key: string;
    name: string;
    lat: number;
    lng: number;
    info: string;
};

const url =
"https://api.openweathermap.org/data/2.5/weather?lat=54.5967&lon=-5.9300&appid=708e98ba900f0f0b00a0560aaa10ae72";

const conditions: RawWeather[] = [
        useEffect(
          () => {
            fetch(url, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
              // body: JSON.stringify({key: 'id'}),
            })
              .then((response) => response.json())
              .then((data) => setData(data));
          },
          [setData],
          console.log(setData),
          []
        );

    ];

const formatted: Weather[] = conditions.map(([name, lat, lng, info]) => ({
    name,
    lat,
    lng,
    info,
    key: JSON.stringify({ name, lat, lng, info })
}));

export default formatted;