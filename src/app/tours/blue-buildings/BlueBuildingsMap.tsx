"use client";

import {
  APIProvider,
  Map,
  useAdvancedMarkerRef,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

import buildings from "../../data/buildings";
import { useState } from "react";

export default function BlueMapOfBuildings() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={"AIzaSyBtYriy63SzVW7FgSa9vz1iSMCAkhirzBQ"}>
      <div style={{ height: "100vh", width: "100" }}>
        <Map zoom={15} center={position} mapId={"9efae32f7fd65c2"}>
          <Markers points={buildings} />
        </Map>
      </div>
    </APIProvider>
  );
}

type Point = google.maps.LatLngLiteral & { key: string } & { name: string } & {
  info: string;
};
type Props = { points: Point[] };

const Markers = ({ points }: Props) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infowindowShown, setInfowindowShown] = useState(false);

  const toggleInfoWindow = () =>
    setInfowindowShown((previousState) => !previousState);
  const closeInfoWindow = () => setInfowindowShown(false);

  return (
    <>
      {points.map((point) => (
        <AdvancedMarker
          ref={markerRef}
          position={point}
          key={point.key}
          onClick={toggleInfoWindow}
        >
          <span style={{ fontSize: "2rem" }}>🏛️</span>
          {infowindowShown && (
            <InfoWindow
              onCloseClick={closeInfoWindow}
              content={point.name + point.info}
              position={point}
              key={point.key}
            ></InfoWindow>
          )}
        </AdvancedMarker>
      ))}
    </>
  );
};
