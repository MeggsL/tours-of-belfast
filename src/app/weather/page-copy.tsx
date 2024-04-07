//import Box from "@mui/material/Box";
//import Alert from "@mui/material/Alert";
//import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
//import Grid from "@mui/material/Grid";
//import App from "../apis/GetWeather.js";
import GetOpenWeather from "../apis/GetOpenWeather.js";

export default function Weather() {
  return (
    <div>
      <GetOpenWeather />
    </div>
  );
}
