"use client";
import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import AppUser from "../../components/(markers)/UserMarker";
import Container from "@mui/material/Container";
import BenchMarkers from "../../components/(markers)/BenchMarkers";
import ToiletMarkers from "../../components/(markers)/ToiletsMarkers";

export default function GreyMapOfBandT() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Container fixed>
        <div style={{ height: "91vh", width: "100" }}>
          <Map
            defaultZoom={15}
            defaultCenter={position}
            mapId={process.env.NEXT_PUBLIC_OVERWHELMED_MAP_ID}
          >
            <AppUser />
            <BenchMarkers />
            <ToiletMarkers />
          </Map>
        </div>
      </Container>
    </APIProvider>
  );
}
