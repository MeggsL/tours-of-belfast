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

const cityHall = { lat: 54.596617288210005, lng: -5.930042286615252 };

function CityHallMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>

          <AdvancedMarker position={cityHall} onClick={() => setOpen(true)}>
            <Pin
              background={"white"}
              borderColor={"black"}
              glyphColor={"black"}
          //    glyph={""}
              scale={1.7}
            />
          </AdvancedMarker>
          {open && (
            <InfoWindow position={cityHall} onCloseClick={() => setOpen(false)}>
              <a href="https://en.wikipedia.org/wiki/Belfast_City_Hall">
                Belfast City Hall (Irish: Halla na Cathrach Bhéal Feirste;
                Ulster-Scots: Bilfawst Citie Haw) is the civic building of
                Belfast City Council located in Donegall Square, Belfast,
                Northern Ireland. It faces North and effectively divides the
                commercial and business areas of the city centre. It is a Grade
                A listed building. Tap to find out more.
              </a>
            </InfoWindow>
          )}

      </div>
    </APIProvider>
  );
}

export default CityHallMarker;
