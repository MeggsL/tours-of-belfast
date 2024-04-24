"use client";

import { useMapsLibrary, useMap } from "@vis.gl/react-google-maps";

import { useEffect, useState } from "react";
import "./routes.css";

function BuildingDirections() {
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
  const [open, setOpen] = useState(false);
  //const [directionsWaypoint, setDirectionsWaypoint] = useState<google.maps.DirectionsWaypoint[]>([]);

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
          {
            location:
              "Crumlin Road Gaol Visitor Attraction and Conference Centre, Belfast UK",
          },
          { location: "Crumlin Road Courthouse, Belfast UK" },
          { location: "Belfast Cathedral, Belfast UK" },
          //{ location: "The Merchant Hotel, Belfast UK" },
          { location: "Custom House, Belfast UK" },
          { location: "St George's Market, Belfast UK" },
          { location: "Riddell Hall, Belfast UK" },
          { location: "The Lanyon Building, Belfast UK" },
          { location: "The Ulster Hall, Belfast UK" },
          { location: "The Linen Hall, Belfast UK" },
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
    suppressMarkers: true;
  }, [routeIndex, directionsRenderer]);

  console.log(routes);
  if (!leg) return null;
  1;

  return null;
}

export default BuildingDirections;
