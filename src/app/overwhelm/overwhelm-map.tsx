"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";

//import { useEffect, useState, useRef } from "react";
import spots from "../../apis/overwhelm";

export default function MapOfQuietSpots() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={"AIzaSyBtYriy63SzVW7FgSa9vz1iSMCAkhirzBQ"}>
      <div style={{ height: "100vh", width: "100" }}>
        <Map defaultZoom={15} defaultCenter={position} mapId={"c18fb97b8c0aa847"}>
          <Markers points={spots} />
        </Map>
      </div>
    </APIProvider>
  );
}

type Point = google.maps.LatLngLiteral & { key: string };
type Props = { points: Point[] };

const Markers = ({ points }: Props) => {
  return (
    <>
      {points.map((point) => (
        <AdvancedMarker position={point} key={point.key}>
          <span style={{ fontSize: "2rem" }}>🤫</span>
        </AdvancedMarker>
      ))}
    </>
  );
};