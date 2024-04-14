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

const nualaWithTheHula = { lat: 54.59963348933054, lng: -5.921414815904341 };

function BeaconOfHopeMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker
          position={nualaWithTheHula}
          onClick={() => setOpen(true)}
        >
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
            position={nualaWithTheHula}
            onCloseClick={() => setOpen(false)}
          >
            <a href="https://en.wikipedia.org/wiki/Beacon_of_Hope_(sculpture)">
              <b>The Beacon of Hope</b> or Thanksgiving Square Beacon is a
              £300,000 public art metal sculpture by Andy Scott 19.5 metres high
              constructed in 2007 in Thanksgiving Square in Belfast, Northern
              Ireland. Other nicknames for the piece include Nuala with the
              Hula, the Belle on the Ball, and the Thing with the Ring, Tap to
              find out more.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default BeaconOfHopeMarker;
