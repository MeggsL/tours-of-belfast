"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import BuildingMarkers from "../(markers)/BuildingMarkers";
import Container from "@mui/material/Container";
import AppUser from "../(markers)/UserMarker";
import LandmarkMarkers from "../(markers)/LandmarkMarkers";
import LandBDirections from "../(directions)/Directions-l-b";


export default function PurpleMapOfBuildingsAndLandmarks() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Container fixed>
        <div style={{ height: "91vh", width: "100" }}>
          <Map
            defaultZoom={15}
            defaultCenter={position}
            mapId={process.env.NEXT_PUBLIC_PURPLE_MAP_ID}
          >
      <BuildingMarkers />
      <LandmarkMarkers />
      <AppUser />
      <LandBDirections />

      
          </Map>
        </div>
      </Container>
    </APIProvider>
  );
}