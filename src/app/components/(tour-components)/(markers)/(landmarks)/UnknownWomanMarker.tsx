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

const unknownWoman = { lat: 54.594659184522826, lng: -5.9346151307971935 };

function UnknownWomanMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={unknownWoman} onClick={() => setOpen(true)}>
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
            position={unknownWoman}
            onCloseClick={() => setOpen(false)}
          >
            <a href="https://en.wikipedia.org/wiki/Monument_to_the_Unknown_Woman_Worker">
              <b>The Monument to the Unknown Woman Worker</b> is a 1992
              sculpture by Louise Walsh.It is cast in bronze and features two
              working-class women with symbols of women's work embedded on the
              surfaces. Domestic items such as colanders, a shopping basket and
              clothes pegs are part of the sculpture. Tap to find out more.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default UnknownWomanMarker;
