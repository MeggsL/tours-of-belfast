"use client";

import {
  useAdvancedMarkerRef,
  AdvancedMarker,
  InfoWindow,
  Pin,
} from "@vis.gl/react-google-maps";

import statues from "../../data/statues";
import { useState } from "react";

type Point = google.maps.LatLngLiteral & { key: string } & { name: string } & {
  info: string;
};
type Props = { points: Point[] };

const MapMarkers = ({ points }: Props) => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <>
      {/* map out the various points from the data source: overwhelm.ts */}
      {points.map((point) => (
        <AdvancedMarker
          ref={markerRef}
          position={point}
          key={point.key}
          onClick={() => handleActiveMarker(point)}
        >
          {/* create custom pin */}
          <Pin background={"#f5f489"} borderColor={"#1e89a1"} scale={1.4}>
            {/* children are rendered as 'glyph' of pin */}
            <span style={{ fontSize: "1rem" }}>🗽</span>
          </Pin>

          {/* create InfoWindow for each marker and set it so that only the window for the marker clicked-on opens*/}
          {activeMarker === point ? (
            <InfoWindow
              // anchor={marker}
              maxWidth={200}
              onCloseClick={() => setActiveMarker(null)}
              //  content={point.name + point.info}
              position={point}
              key={point.key}
            >
              <h2>{point.name}</h2>
              <p>{point.info}</p>
            </InfoWindow>
          ) : null}
        </AdvancedMarker>
      ))}
    </>
  );
};
export { MapMarkers };

function StatueMarkers() {
  return <MapMarkers points={statues} />;
};

export default StatueMarkers;
