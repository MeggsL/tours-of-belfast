"use client";

import {
  AdvancedMarker,
  InfoWindow,
  APIProvider,
  Pin,
} from "@vis.gl/react-google-maps";

import { useState } from "react";

//to create a new marker, 1. rename the const 2. update the lat and lng 3. rename the function
//4. update const name in position arguments of Advanced Marker and Infowindow components
//5. amend the marker description in Infowindow

const bigFish = { lat: 54.60157071099889, lng: -5.921668522486072 };

function BigFishMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={bigFish} onClick={() => setOpen(true)}>
          <Pin
            background={"white"}
            borderColor={"black"}
            glyphColor={"black"}
            //    glyph={""}
            scale={1.7}
          />
        </AdvancedMarker>
        {open && (
          <InfoWindow position={bigFish} onCloseClick={() => setOpen(false)}>
            <a href="https://en.wikipedia.org/wiki/The_Big_Fish">
              <b>Bigfish</b> is a printed ceramic mosaic sculpture by John
              Kindness. The 10-metre-long (33 ft) statue was constructed in 1999
              and installed on Donegall Quay in Belfast, Northern Ireland, near
              the Lagan Lookout and Custom House. Also known as Pat The Fish in
              reference to visitors from Orkney, Scotland patting the fish for
              good luck. Tap to find out more.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default BigFishMarker;
