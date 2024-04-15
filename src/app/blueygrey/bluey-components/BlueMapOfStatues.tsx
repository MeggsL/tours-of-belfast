"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Container from "@mui/material/Container";
import BigFishMarker from "../../components/(tour-components)/(markers)/(statues)/BigFishMarker";
import HarlandMarker from "../../components/(tour-components)/(markers)/(statues)/HarlandMarker";
import MastsMarker from "../../components/(tour-components)/(markers)/(statues)/MastsMarker";
import BeaconOfHopeMarker from "../../components/(tour-components)/(markers)/(statues)/BeaconMarker";
import SpeakerMarker from "../../components/(tour-components)/(markers)/(statues)/SpeakerMarker";
import SpiritMarker from "../../components/(tour-components)/(markers)/(statues)/SpiritOfBelfastMarker";
import VictoriaMarker from "../../components/(tour-components)/(markers)/(statues)/VictoriaMarker";
import StatueDirections from "../../components/(tour-components)/(directions)/StatueDirections";
import AppUser from "../../components/(tour-components)/(markers)/UserMarker";

function BlueMapOfStatues() {
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
            <StatueDirections />
            <BigFishMarker />
            <HarlandMarker />
            <MastsMarker />
            <BeaconOfHopeMarker />
            <SpeakerMarker />
            <SpiritMarker />
            <VictoriaMarker />
          </Map>
        </div>
      </Container>
    </APIProvider>
  );
}
export default BlueMapOfStatues;
