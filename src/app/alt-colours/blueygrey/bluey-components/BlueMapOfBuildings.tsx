"use client";
import React from "react";ort { APIProvider, Map } from "@vis.gl/react-google-maps";
import Container from "@mui/material/Container";
import AppUser from "../../../components/(markers)/UserMarker";
import BuildingMarkers from "../../../components/(markers)/BuildingMarkers";
import DirectionsBuildings from "../../../components/(directions)/DirectionsBuildings";

export default function BlueMapOfBuildings() {
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
            <BuildingMarkers />
            <DirectionsBuildings />
          </Map>
        </div>
      </Container>
    </APIProvider>
  );
}
