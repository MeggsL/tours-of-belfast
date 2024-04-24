"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Container from "@mui/material/Container";
import LandmarkMarkers from "../../components/(markers)/LandmarkMarkers";
import AppUser from "../../components/(markers)/UserMarker";
import DirectionsLandmarks from "../../components/(directions)/DirectionsLandmarks";

export default function PinkMapOfLandmarks() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Container fixed>
        <div style={{ height: "91vh", width: "100" }}>
          <Map
            defaultZoom={15}
            defaultCenter={position}
            mapId={process.env.NEXT_PUBLIC_PINK_MAP_ID}
          >
            <AppUser />
            <LandmarkMarkers />
            <DirectionsLandmarks />
         
          </Map>
        </div>
      </Container>
    </APIProvider>
  );
}
