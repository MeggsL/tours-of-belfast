"use client";

import {
  APIProvider,
  Map,
  //useMap,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";

//import { useEffect, useState, useRef } from "react";
import landmarks from "../../data/landmarks";

export default function MapOfLandmarks() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <Map zoom={15} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          <Markers points={landmarks} />
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
          <span style={{ fontSize: "3rem" }}>🕋</span>
        </AdvancedMarker>
      ))}
    </>
  );
};
