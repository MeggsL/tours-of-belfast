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

const theMasts = { lat: 54.59831284496603, lng: -5.930482437964718 };

function MastsMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={theMasts} onClick={() => setOpen(true)}>
          <Pin
            background={"white"}
            borderColor={"black"}
            glyphColor={"black"}
            //    glyph={""}
            scale={1.7}
          />
        </AdvancedMarker>
        {open && (
          <InfoWindow position={theMasts} onCloseClick={() => setOpen(false)}>
            <a href="https://visitbelfast.com/partners/titanic-public-art-the-masts/">
              <b>
                Titanic, her sister ships Olympic and Brittanic, and Nomadic
              </b>{" "}
              are among eight famous Belfast made ships represented by
              spectacular sculptured masts that line the east side of Donegall
              Place in the heart of Belfast. Each mast carries a sail which
              celebrates Belfast's maritime heritage. Tap to find out more.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default MastsMarker;
