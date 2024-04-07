"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMapsLibrary,
  useMap,
} from "@vis.gl/react-google-maps";

import { useEffect, useState } from "react";
import "./routes.css";
import "../../../globals.css";
import { Alert, Box, IconButton, Collapse, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/*function BlueMapWithRoutes() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={"AIzaSyBtYriy63SzVW7FgSa9vz1iSMCAkhirzBQ"}>
      <div style={{ height: "100vh", width: "100" }}>
        <Map
          defaultZoom={15}
          defaultCenter={position}
          mapId={"9efae32f7fd65c2"}
        >
          <Directions />
        </Map>
      </div>
    </APIProvider>
  );
*/
function StatueDirections() {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];
  const [open, setOpen] = useState(true);
  //const [directionsWaypoint, setDirectionsWaypoint] = useState<google.maps.DirectionsWaypoint[]>([]);

  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: "#6fbed9",
      },
      secondary: {
        main: "#5db1d2",
      },
    },
  });

  const AlertBoxColour = createTheme({
    palette: {
      primary: {
        main: "#7d5fb2",
      },
      secondary: {
        main: "#d7a8df",
      },
    },
  });

  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  //  console.log(directionsService);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
    directionsService
      .route({
        origin: "Europa Buscentre, Belfast UK",

        waypoints: [
          { location: "Queen's Arcade, Belfast UK" }, //the masts
          { location: "Spirit of Belfast, Belfast UK" },
          { location: "The Speaker, Belfast UK" },
          { location: "The Big Fish, Belfast UK" },
          { location: "Beacon of Hope, Belfast UK" },
          { location: "The Speaker, Belfast UK" },
          //   { location: "Queen Victoria Memorial, Belfast UK" },
          //  { location: "Edward James Harland Statue, Belfast UK" },
        ],
        destination: "Front of Belfast City Hall, Belfast UK",
        travelMode: google.maps.TravelMode.WALKING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
  }, [directionsService, directionsRenderer]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  console.log(routes);
  if (!leg) return null;



  return (
    
    <div className="alertbox">
      <Box maxWidth={"50%"}>
        <Collapse in={open}>
        <ThemeProvider theme={AlertBoxColour}>
          <Alert
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <h2>{selected.summary}</h2>
            <p>
              {leg.start_address.split(",")[0]} to{" "}
              {leg.end_address.split(",")[0]}
            </p>
            <p>Distance: {leg.distance?.text}</p>
            <p>Duration: {leg.duration?.text}</p>

            <h2>Other Routes</h2>
            <ul>
              {routes.map((route, index) => (
                <li key={route.summary}>
                  <button onClick={() => setRouteIndex(index)}>
                    {route.summary}
                  </button>
                </li>
              ))}
            </ul>
          </Alert>
          </ThemeProvider>
        </Collapse>
        <ThemeProvider theme={ButtonColor}>
          <Button
            disabled={open}
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          >
            Route Info
          </Button>
        </ThemeProvider>
      </Box>
    </div>
  );
}

export default StatueDirections;
