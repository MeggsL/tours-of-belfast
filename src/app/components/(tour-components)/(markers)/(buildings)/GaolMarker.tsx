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

const crumlinRoadGaol = { lat: 54.609589686911356, lng: -5.942150323272715 };

function GaolMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
    
          <AdvancedMarker position={crumlinRoadGaol} onClick={() => setOpen(true)}>
            <Pin
              background={"white"}
              borderColor={"black"}
              glyphColor={"black"}
            //  glyph={"Gaol"}
              scale={1.7}
            />
          </AdvancedMarker>
          {open && (
            <InfoWindow position={crumlinRoadGaol} onCloseClick={() => setOpen(false)}>
              <a href="https://en.wikipedia.org/wiki/HM_Prison_Belfast">
                <b>HM Prison Belfast</b>, also known as Crumlin Road Gaol, is a former
                prison situated on the Crumlin Road in north Belfast, Northern
                Ireland. Since 1996 it is the only remaining Victorian era
                former prison in Northern Ireland. It is colloquially known as
                the Crum. Tap to find out more.
              </a>
            </InfoWindow>
          )}
    
      </div>
    </APIProvider>
  );
}

export default GaolMarker;
