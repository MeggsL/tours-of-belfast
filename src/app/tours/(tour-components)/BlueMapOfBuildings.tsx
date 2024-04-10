"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
//import BuildingMarkers from "./(markers)/BuildingMarkers";
//import ClickableMarkers from "../buildings/ClickableMarkers.jsx";
import BuildingMarkers from "./(markers)/BelfastCityHallMarker";
import Container from "@mui/material/Container";
import BelfastCityHallMarker from "./(markers)/BelfastCityHallMarker";
import CrumlinRoadGaolMarker from "./(markers)/CrumRoadGaolMarker";

function BlueMapOfBuildings() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={"AIzaSyBtYriy63SzVW7FgSa9vz1iSMCAkhirzBQ"}>
      <Container fixed>
        <div style={{ height: "91vh", width: "100" }}>
          <Map
            defaultZoom={15}
            defaultCenter={position}
            mapId={"9efae32f7fd65c2"}
          >
            <BelfastCityHallMarker />
            <CrumlinRoadGaolMarker />
          </Map>
        </div>
      </Container>
    </APIProvider>
  );
}
export default BlueMapOfBuildings;
