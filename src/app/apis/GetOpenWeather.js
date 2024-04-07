import React from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";

const customStyles = {
  fontFamily: "Helvetica, sans-serif",
  gradientStart: "#0181C2",
  gradientMid: "#04A7F9",
  gradientEnd: "#4BC4F7",
  locationFontColor: "#FFF",
  todayTempFontColor: "#FFF",
  todayDateFontColor: "#B5DEF4",
  todayRangeFontColor: "#B5DEF4",
  todayDescFontColor: "#B5DEF4",
  todayInfoFontColor: "#B5DEF4",
  todayIconColor: "#FFF",
  forecastBackgroundColor: "#FFF",
  forecastSeparatorColor: "#DDD",
  forecastDateColor: "#777",
  forecastDescColor: "#777",
  forecastRangeColor: "#777",
  forecastIconColor: "#4BC4F7",
};

const GetOpenWeather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "708e98ba900f0f0b00a0560aaa10ae72",
    lat: "54.596617288210005",
    lon: "-5.930042286615252",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      theme={customStyles}
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Belfast"
      unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
      showForecast
    />
  );
};
export default GetOpenWeather;
