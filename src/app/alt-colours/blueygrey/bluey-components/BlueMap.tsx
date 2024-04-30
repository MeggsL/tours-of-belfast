"use client";
import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

<script async
    src="https://maps.googleapis.com/maps/api/js?key=NEXT_PUBLIC_GOOGLE_MAPS_API_KEY&loading=async&callback=initMap">
</script>

function BlueMap() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <Map
          defaultZoom={15}
          defaultCenter={position}
          mapId={process.env.NEXT_PUBLIC_BLUE_MAP_ID}
        ></Map>
      </div>
    </APIProvider>
  );
}
export default BlueMap;
