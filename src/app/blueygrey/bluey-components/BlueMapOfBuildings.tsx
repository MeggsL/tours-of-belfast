"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
//import BuildingMarkers from "./(markers)/BuildingMarkers";
//import ClickableMarkers from "../buildings/ClickableMarkers.jsx";
import Container from "@mui/material/Container";
//import FloatingButton from "../../components/FloatingButton";
//import Grid from "@mui/material/Grid";
import BuildingsDirections from "../../components/(tour-components)/(directions)/BuildingsDirections";
import CityHallMarker from "../../components/(tour-components)/(markers)/(buildings)/CityHallMarker";
import LinenHallMarker from "../../components/(tour-components)/(markers)/(buildings)/LinenHallMarker";
import GaolMarker from "../../components/(tour-components)/(markers)/(buildings)/GaolMarker";
import RiddellHallMarker from "../../components/(tour-components)/(markers)/(buildings)/RiddellHallMarker";
import CustomHouseMarker from "../../components/(tour-components)/(markers)/(buildings)/CustomHouseMarker";
import CourthouseMarker from "../../components/(tour-components)/(markers)/(buildings)/CourthouseMarker";
import LanyonMarker from "../../components/(tour-components)/(markers)/(buildings)/LanyonMarker";
import UlsterHallMarker from "../../components/(tour-components)/(markers)/(buildings)/UlsterHallMarker";
import CathedralMarker from "../../components/(tour-components)/(markers)/(buildings)/CathedralMarker";

function BlueMapOfBuildings() {
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
