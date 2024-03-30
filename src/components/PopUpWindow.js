import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
//import DataFetcher from '../AirQualityDataFetch.js';
import AirQuality from '../AirQualityDataFetchAxios.js';

export default function PopUp(){
  return (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div><AirQuality /></div>
  </Popup>
  )
};