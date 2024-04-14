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

const georgesMarket = { lat: 54.59627070010794, lng: -5.921965530797129 };

function MarketMarker() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={georgesMarket} onClick={() => setOpen(true)}>
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
            position={georgesMarket}
            onCloseClick={() => setOpen(false)}
          >
            <a href="https://en.wikipedia.org/wiki/St_George%27s_Market">
              <b>St George's Market</b> is the last surviving Victorian covered
              market in Belfast, Northern Ireland.Before 1890 St George's Market
              was an open market and most likely contained a slaughterhouse and
              a meat market. Today it is a thriving market with 300 traders,
              crafters, musicians, and food vendors. Tap to find out more.
            </a>
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default MarketMarker;
