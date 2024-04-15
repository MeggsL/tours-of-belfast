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

const appUser = { lat: 54.59508217431334, lng: -5.935987917492315 };

function AppUser() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={appUser} onClick={() => setOpen(true)}>
          <Pin
            background={"aqua"}
            borderColor={"black"}
            glyphColor={"black"}
            //    glyph={""}
            scale={1.7}
          />
        </AdvancedMarker>
        {open && (
          <InfoWindow position={appUser} onCloseClick={() => setOpen(false)}>
            <b>Hi there!</b> In the development stage of this app, this marker
            represents the assumed location of the user upon opening the app.
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default AppUser;
