"use client";

import { useEffect, useState } from "react";
import {
    APIProvider,
    Map,
    useMapsLibrary,
    useMap
} from "@vis.gl/react-google-maps";
import BlueMapWithRoutes from "../purpley-welcome/purpley-tours/(tour-components)/(directions)/StatueDirections";
import BlueMapOfStatues from "../purpley-welcome/purpley-tours/(tour-components)/BlueMapOfStatues";

export default function DirectionsApp(){
    return <div><BlueMapOfStatues /></div>;
}