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

const riddellHall = { lat: 54.57629559332741, lng: -5.934817611743387 };

function RiddellHallMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={riddellHall} onClick={() => setOpen(true)}>
      {/*create customised pin */}
      <Pin background={"#22ccff"} borderColor={"#1e89a1"} scale={1.7}>
            {/* children are rendered as 'glyph' of pin */}
            <span style={{ fontSize: "1rem" }}>🎓</span>
          </Pin>
        </AdvancedMarker>
        {open && (
          <InfoWindow
            position={riddellHall}
            onCloseClick={() => setOpen(false)}
          >
            <a href="https://en.wikipedia.org/wiki/Eliza_and_Isabella_Riddel">
              <b>Eliza</b> (1831–1924) and <b>Isabella Riddel</b> (1836–1918) were sisters who
              are best known for Riddel Hall in Stranmillis, Belfast, Ireland,
              which they established in 1913 as a university hall of residence
              for women.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default RiddellHallMarker;
