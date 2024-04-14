"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
//import BuildingMarkers from "./(markers)/BuildingMarkers";
//import ClickableMarkers from "../buildings/ClickableMarkers.jsx";
import BuildingMarkers from "./(markers)/(buildings)/CityHallMarker";
import Container from "@mui/material/Container";

import FloatingButton from "../../components/FloatingButton";
import Grid from "@mui/material/Grid";
import BuildingsDirections from "../(tour-components)/(directions)/BuildingsDirections";
import CityHallMarker from "./(markers)/(buildings)/CityHallMarker";
import LinenHallMarker from "./(markers)/(buildings)/LinenHallMarker";
import GaolMarker from "./(markers)/(buildings)/GaolMarker";
import RiddellHallMarker from "./(markers)/(buildings)/RiddellHallMarker";
import CustomHouseMarker from "./(markers)/(buildings)/CustomHouseMarker";
import CourthouseMarker from "./(markers)/(buildings)/CourthouseMarker";
import LanyonMarker from "./(markers)/(buildings)/LanyonMarker";
import UlsterHallMarker from "./(markers)/(buildings)/UlsterHallMarker";
import CathedralMarker from "./(markers)/(buildings)/CathedralMarker";

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
            <BuildingsDirections />
            <CityHallMarker />
            <LinenHallMarker />
            <GaolMarker />
            <RiddellHallMarker />
            <CustomHouseMarker />
            <CourthouseMarker />
            <LanyonMarker />
            <UlsterHallMarker />
            <CathedralMarker />
          </Map>
        </div>
      </Container>
    </APIProvider>
  );
}
export default BlueMapOfBuildings;
