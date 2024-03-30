"use client";

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
//import DataFetcher from '../../components/AirQualityDataFetch.js';
//import Handler from '../../components/AirQualityDataFetchCors.js';
import AirQuality from '../../components/AirQualityDataFetchAxios.js';

/*
export default function PopUp(){
  return (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div><AirQuality /></div>
  </Popup>
  )
};
*/

export default function PopUp(){
  return (
    <div><AirQuality /></div>
  )
};