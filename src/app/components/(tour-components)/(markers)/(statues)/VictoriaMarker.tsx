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

const queenVictoria = { lat: 54.596967674342125, lng: -5.930081393985419 };

function VictoriaMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={queenVictoria} onClick={() => setOpen(true)}>
          <Pin
            background={"white"}
            borderColor={"black"}
            glyphColor={"black"}
            //    glyph={""}
            scale={1.7}
          />
        </AdvancedMarker>
        {open && (
          <InfoWindow position={queenVictoria} onCloseClick={() => setOpen(false)}>
            <a href="https://www.encirclephotos.com/image/the-speaker-statue-at-custom-house-in-belfast-northern-ireland/">
              <b>The Speaker</b> is a life-size bronze statue created by
              local-born artist Gareth Knowles.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default VictoriaMarker;
