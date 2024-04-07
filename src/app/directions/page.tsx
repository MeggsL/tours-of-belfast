"use client";

import { useEffect, useState } from "react";
import {
    APIProvider,
    Map,
    useMapsLibrary,
    useMap
} from "@vis.gl/react-google-maps";
import BlueMapWithRoutes from "../tours/(tour-components)/(directions)/StatueDirections";

export default function DirectionsApp(){
    return <div><BlueMapWithRoutes /></div>;
}