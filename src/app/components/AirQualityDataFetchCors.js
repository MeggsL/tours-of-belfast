"use client";

import React, { useEffect, useState } from 'react';
import cors from "cors";

const Handler = async (req, res) => {
const AirQuality = ()=>{
  const [air, setAir] = useState([]);


  useEffect (() => {
    fetch('')
    .then(response => response.json())
    .then(data => SettingsBackupRestoreSharp(data))
    .catch(error => console.error ('Error fecthing air data:', error));
  
  });

  return (
    <div>
      {air.map(air => (
        <div key={user.id}>{air.data}</div>
      ))}
    </div>
  );

};
};
export default cors()(Handler);