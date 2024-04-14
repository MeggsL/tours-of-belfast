"use client";

import {
  useAdvancedMarkerRef,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

import buildings from "../../../apis/buildings";
import { useState } from "react";
import "./markers.css";

type Point = google.maps.LatLngLiteral & { key: string } & { name: string } & {
  info: string;
};
type Props = { points: Point[] };

const Markers = ({ points }: Props) => {
  //const [open, setOpen] = useState(false);
  const [markerRef] = useAdvancedMarkerRef();
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
            <div className="infowindow">
            <InfoWindow
              onCloseClick={closeInfoWindow}
              content={point.name + point.info}
              position={point}
              key={point.key}
            ></InfoWindow>
            </div>
          )}
        </AdvancedMarker>
      ))}
    </>
  );
};
export { Markers };

function BuildingMarkers() {
  return <Markers points={buildings} />;
};

export default BuildingMarkers;