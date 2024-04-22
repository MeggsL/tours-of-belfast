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

const linenHall = { lat: 54.597716857004805, lng: -5.931591271269812 };

function LinenHallMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={linenHall} onClick={() => setOpen(true)}>
     {/*create customised pin */}
     <Pin background={"#22ccff"} borderColor={"#1e89a1"} scale={1.7}>
            {/* children are rendered as 'glyph' of pin */}
            <span style={{ fontSize: "1rem" }}>📚</span>
          </Pin>
        </AdvancedMarker>
        {open && (
          <InfoWindow position={linenHall} onCloseClick={() => setOpen(false)}>
            <a href="https://en.wikipedia.org/wiki/Linen_Hall_Library">
              <b>The Linen Hall Library</b> is located at 17 Donegall Square North,
              Belfast, Northern Ireland. It is the oldest library in Belfast and
              the last subscribing library in Northern Ireland. The Library is
              physically in the centre of Belfast, and more generally at the
              centre of the cultural and creative life of the wider community.
              It is an independent and charitable body.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default LinenHallMarker;
