"use client";

import {
  useAdvancedMarkerRef,
  AdvancedMarker,
  InfoWindow,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";

import { useState } from "react";

const courtHouse = {
  lat: 54.60869323459317,
  lng: -5.942640928942047,
};

function CourthouseMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={courtHouse} onClick={() => setOpen(true)}>
          <Pin
            background={"white"}
            borderColor={"black"}
            glyphColor={"black"}
          //  glyph={"Courthouse"}
            scale={1.7}
          />
        </AdvancedMarker>
        {open && (
          <InfoWindow position={courtHouse} onCloseClick={() => setOpen(false)}>
            <a href="https://en.wikipedia.org/wiki/Crumlin_Road_Courthouse">
              <b>The Crumlin Road Courthouse</b> is a former judicial facility on
              Crumlin Road in Belfast, Northern Ireland. It is a Grade B+ listed
              building.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default CourthouseMarker;