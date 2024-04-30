"use client";
import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import BuildingMarkers from "../../../components/(markers)/BuildingMarkers";
import Container from "@mui/material/Container";
import AppUser from "../../../components/(markers)/UserMarker";
import StatueMarkers from "../../../components/(markers)/StatueMarkers";
import BandSDirections from "../../../components/(directions)/Directions-b-s";

export default function BlueMapOfBuildingsAndStatues() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  <script async
    src="https://maps.googleapis.com/maps/api/js?key=NEXT_PUBLIC_GOOGLE_MAPS_API_KEY&loading=async&callback=initMap">
</script>

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Container fixed maxWidth={false}>
        <div style={{ height: "91vh" }}>
          <Map
            defaultZoom={15}
            defaultCenter={position}
            mapId={process.env.NEXT_PUBLIC_BLUE_MAP_ID}
          >
            <BuildingMarkers />
            <StatueMarkers />
            <AppUser />
            <BandSDirections />
          </Map>
        </div>
      </Container>
    </APIProvider>
  );
}
