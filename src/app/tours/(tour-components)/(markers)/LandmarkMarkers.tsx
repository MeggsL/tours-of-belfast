"use client";

import {
  useAdvancedMarkerRef,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

import landmarks from "../../../data/landmarks";
import { useState } from "react";

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
          <span style={{ fontSize: "2rem" }}>🕋</span>
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
export { Markers };

function LandmarkMarkers() {
  return <Markers points={landmarks} />;
};

export default LandmarkMarkers;
