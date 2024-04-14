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

const spiritOfBelfast = { lat: 54.598735724784746, lng: -5.927203822007786 };

function SpiritMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker
          position={spiritOfBelfast}
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
            position={spiritOfBelfast}
            onCloseClick={() => setOpen(false)}
          >
            <a href="https://en.wikipedia.org/wiki/Spirit_of_Belfast">
              <b>The Spirit of Belfast</b> is a public art sculpture by Dan
              George. The sculpture is located on Arthur Square, close to the
              main point of access to Victoria Square. As with other public
              works of art in Northern Ireland the sculpture has been given a
              nickname, the Onion Rings.Tap to find out more.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default SpiritMarker;
