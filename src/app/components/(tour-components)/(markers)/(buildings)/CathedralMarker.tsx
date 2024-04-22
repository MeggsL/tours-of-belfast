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

const bigChurch = { lat: 54.602993322702154, lng: -5.928552370341554 };

function CathedralMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={bigChurch} onClick={() => setOpen(true)}>
          {/*create customised pin */}
          <Pin background={"#22ccff"} borderColor={"#1e89a1"} scale={1.7}>
            {/* children are rendered as 'glyph' of pin */}
            <span style={{ fontSize: "1rem" }}>⛪︎</span>
          </Pin>
        </AdvancedMarker>
        {open && (
          <InfoWindow position={bigChurch} onCloseClick={() => setOpen(false)}>
            <a href="https://en.wikipedia.org/wiki/St_Anne%27s_Cathedral,_Belfast">
              <b>Belfast Cathedral</b>, also known as St Anne's Cathedral, is a
              Church of Ireland cathedral in Donegall Street, Belfast, Northern
              Ireland. It is unusual in serving two separate dioceses (Connor
              and Down and Dromore). It is the focal point of Belfast's
              Cathedral Quarter.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default CathedralMarker;
