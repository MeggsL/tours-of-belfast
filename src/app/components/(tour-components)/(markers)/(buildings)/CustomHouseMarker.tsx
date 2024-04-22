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

const customHouse = { lat: 54.60180575806063, lng: -5.9226371570621 };

function CustomHouseMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={customHouse} onClick={() => setOpen(true)}>
          {/*create customised pin */}
          <Pin background={"#22ccff"} borderColor={"#1e89a1"} scale={1.7}>
            {/* children are rendered as 'glyph' of pin */}
            <span style={{ fontSize: "1rem" }}>🏛️</span>
          </Pin>
        </AdvancedMarker>
        {open && (
          <InfoWindow
            position={customHouse}
            onCloseClick={() => setOpen(false)}
          >
            <a href="https://en.wikipedia.org/wiki/Custom_House,_Belfast">
              <b>The Custom House</b> is a 19th-century B+ listed building
              located in Belfast, Northern Ireland. Completed in 1857, the
              building has been used by various governmental departments,
              including the Belfast Board of Works, the Inland Revenue, and an
              Income Tax Office.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default CustomHouseMarker;
