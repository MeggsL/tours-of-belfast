"use client";

import {
  APIProvider,
  Map,
} from "@vis.gl/react-google-maps";
import Container from "@mui/material/Container";
import AlbertClockMarker from "../../components/(tour-components)/(markers)/(landmarks)/AlbertClockMarker";
import CrownMarker from "../../components/(tour-components)/(markers)/(landmarks)/CrownMarker";
import HenryCookeMarker from "../../components/(tour-components)/(markers)/(landmarks)/HenryCookeMarker";
import MarketMarker from "../../components/(tour-components)/(markers)/(landmarks)/MarketMarker";
import TitanicMemorialMarker from "../../components/(tour-components)/(markers)/(landmarks)/TitanicMemorialMarker";
import UnknownWomanMarker from "../../components/(tour-components)/(markers)/(landmarks)/UnknownWomanMarker";
import WarMemorialMarker from "../../components/(tour-components)/(markers)/(landmarks)/WarMemorialMarker";
import LandmarkDirections from "../../components/(tour-components)/(directions)/LandmarkDirections";


function BlueMapOfLandmarks() {
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

<LandmarkDirections />
<AlbertClockMarker />
<CrownMarker />
<HenryCookeMarker />
<MarketMarker />
<TitanicMemorialMarker />
<UnknownWomanMarker />
<WarMemorialMarker />


          </Map>
        </div>
      </Container>
    </APIProvider>
  );
}
export default BlueMapOfLandmarks;