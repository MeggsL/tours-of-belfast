"use client";
import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Container from "@mui/material/Container";
import StatueMarkers from "../../../components/(markers)/StatueMarkers";
import AppUser from "../../../components/(markers)/UserMarker";
import DirectionsStatues from "../../../components/(directions)/DirectionsStatues";

<script async
    src="https://maps.googleapis.com/maps/api/js?key=NEXT_PUBLIC_GOOGLE_MAPS_API_KEY&loading=async&callback=initMap">
</script>

export default function BlueMapOfStatues() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Container fixed>
        <div style={{ height: "91vh", width: "100" }}>
          <Map
            defaultZoom={15}
            defaultCenter={position}
            mapId={process.env.NEXT_PUBLIC_BLUE_MAP_ID}
          >
            <AppUser />
            <StatueMarkers />
            <DirectionsStatues />
          </Map>
        </div>
      </Container>
    </APIProvider>
  );
}
