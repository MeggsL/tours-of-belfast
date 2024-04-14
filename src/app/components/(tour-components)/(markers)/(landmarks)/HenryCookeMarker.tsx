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

const henryCooke = { lat: 54.59728103593597, lng: -5.934786146142514 };

function HenryCookeMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={henryCooke} onClick={() => setOpen(true)}>
          <Pin
            background={"white"}
            borderColor={"black"}
            glyphColor={"black"}
            //    glyph={""}
            scale={1.7}
          />
        </AdvancedMarker>
        {open && (
          <InfoWindow position={henryCooke} onCloseClick={() => setOpen(false)}>
            <a href="https://en.wikipedia.org/wiki/Henry_Cooke_(minister)">
              <b>Henry Cooke</b> (1788–1868) was an Irish Presbyterian minister,
              an opponent of secularisation, and, in response to Catholic
              mobilisation under Daniel O'Connell, an advocate of "Protestant
              unity". Tap to find out more.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default HenryCookeMarker;
