"use client";

import { useMapsLibrary, useMap } from "@vis.gl/react-google-maps";

import { useEffect, useState } from "react";
import "./routes.css";
import "../../../globals.css";

export default function StatueDirections() {
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

  //for (let i = 0; i < selected.leg.length; i++) {
  //  const selectedSegment = i + 1;

  return null;
}
