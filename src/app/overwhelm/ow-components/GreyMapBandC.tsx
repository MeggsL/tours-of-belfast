"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import AppUser from "../../components/(markers)/UserMarker";
import Container from "@mui/material/Container";
import CafeMarkers from "../../components/(markers)/CafeMarkers";
import BenchMarkers from "../../components/(markers)/BenchMarkers";

export default function GreyMapBandC() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Container fixed>
        <div style={{ height: "100vh", width: "100" }}>
          <Map
            defaultZoom={15}
            defaultCenter={position}
            mapId={process.env.NEXT_PUBLIC_OVERWHELMED_MAP_ID}
          >
            <AppUser />
            <BenchMarkers />
            <CafeMarkers />
          </Map>
        </div>
      </Container>
    </APIProvider>
  );
}
