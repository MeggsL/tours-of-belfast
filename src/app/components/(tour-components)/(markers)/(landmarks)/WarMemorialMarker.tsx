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

const warMemorial = { lat: 54.596349193411925, lng: -5.93095113079713 };

function WarMemorialMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={warMemorial} onClick={() => setOpen(true)}>
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
            position={warMemorial}
            onCloseClick={() => setOpen(false)}
          >
            <a href="https://en.wikipedia.org/wiki/Belfast_Cenotaph">
              <b>The Belfast Cenotaph</b> is a war memorial in Belfast, Northern
              Ireland, in Donegall Square West, to the west of Belfast City
              Hall. Like the City Hall, it was designed by Sir Alfred
              Brumwell Thomas. The cenotaph was unveiled in 1929. It became a
              Grade A listed building in 1984 Tap to find out more.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default WarMemorialMarker;
