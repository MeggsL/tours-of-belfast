"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function GreyMap() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <Map
          defaultZoom={15}
          defaultCenter={position}
          mapId={process.env.NEXT_PUBLIC_OVERWHELMED_MAP_ID}
        ></Map>
      </div>
    </APIProvider>
  );
}
