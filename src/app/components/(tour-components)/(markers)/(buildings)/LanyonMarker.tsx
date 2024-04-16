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

const lanyonBuilding = { lat: 54.58461683745442, lng: -5.935150073124921 };;

function LanyonMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={lanyonBuilding} onClick={() => setOpen(true)}>
          <Pin
            background={"white"}
            borderColor={"black"}
            glyphColor={"black"}
            //    glyph={""}
            scale={1.7}
          />
        </AdvancedMarker>
        {open && (
          <InfoWindow
            position={lanyonBuilding}
            onCloseClick={() => setOpen(false)}
          >
            <a href="https://www.qub.ac.uk/about/History-and-heritage/Historic-Buildings/">
              <b>The Lanyon Building</b> is the centrepiece and the enduring symbol of Queen’s University is
              the original building, completed in 1849. It is known as the
              Lanyon Building after its architect, the renowned Sir Charles
              Lanyon. His design borrows from the Gothic and Tudor character of
              the great medieval universities, and in particular from Magdalen
              College, Oxford.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default LanyonMarker;
