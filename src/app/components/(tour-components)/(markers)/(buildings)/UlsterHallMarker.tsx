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

const ulsterHall = { lat: 54.59476577326982, lng: -5.930962847997169 };

function UlsterHallMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={ulsterHall} onClick={() => setOpen(true)}>
       {/*create customised pin */}
       <Pin background={"#22ccff"} borderColor={"#1e89a1"} scale={1.7}>
            {/* children are rendered as 'glyph' of pin */}
            <span style={{ fontSize: "1rem" }}>🎻</span>
          </Pin>
        </AdvancedMarker>
        {open && (
          <InfoWindow position={ulsterHall} onCloseClick={() => setOpen(false)}>
            <a href="https://en.wikipedia.org/wiki/Ulster_Hall">
              <b>The Ulster Hall</b> is a concert hall and grade A listed building in
              Belfast, Northern Ireland. Situated on Bedford Street in Belfast
              city centre, the hall hosts concerts, classical recitals, craft
              fairs and political party conferences.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default UlsterHallMarker;
