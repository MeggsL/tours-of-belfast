"use client";

import {
  APIProvider,
  Map,
  //useMap,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";

//import { useEffect, useState, useRef } from "react";
import buildings from "../../data/buildings";

export default function PinkMapOfBuildings() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={"AIzaSyBtYriy63SzVW7FgSa9vz1iSMCAkhirzBQ"}>
      <div style={{ height: "100vh", width: "100" }}>
        <Map zoom={15} center={position} mapId={"9530af95ead511e"}>
          <Markers points={buildings} />
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
          <span style={{ fontSize: "2rem" }}>🏛️</span>
        </AdvancedMarker>
      ))}
    </>
  );
};
