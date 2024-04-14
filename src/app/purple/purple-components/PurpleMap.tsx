"use client";

import {
  APIProvider,
  Map,
} from "@vis.gl/react-google-maps";


function PurpleMap() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={"AIzaSyBtYriy63SzVW7FgSa9vz1iSMCAkhirzBQ"}>
      <div style={{ height: "100vh", width: "100" }}>
        <Map defaultZoom={15} defaultCenter={position} mapId={"a7fa3bb79a2e7d76"}>

        </Map>
      </div>
    </APIProvider>
  );
}
export default PurpleMap;