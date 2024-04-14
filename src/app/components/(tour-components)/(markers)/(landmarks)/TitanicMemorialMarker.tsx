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

const titanicMemorial = { lat: 54.5968795897582, lng: -5.929012283834349 };

function TitanicMemorialMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker
          position={titanicMemorial}
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
            position={titanicMemorial}
            onCloseClick={() => setOpen(false)}
          >
            <a href="https://en.wikipedia.org/wiki/Titanic_Memorial,_Belfast">
              <b>The Titanic Memorial</b> in Belfast was erected to commemorate
              the lives lost in the sinking of the RMS Titanic on 15 April 1912.
              It was funded by contributions from the public, shipyard workers,
              and victims' families, and was dedicated in June 1920. It sits on
              Donegall Square in central Belfast, Northern Ireland in the
              grounds of Belfast City Hall. Tap to find out more.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default TitanicMemorialMarker;
