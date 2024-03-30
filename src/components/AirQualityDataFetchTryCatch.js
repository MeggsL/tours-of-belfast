"use client";

import React, { useEffect, useState } from 'react';
import cors from "cors";


const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchData();
      }, []);
      
  const fetchData = async () => {
    try {
      const response = await fetch('https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyDObDgKYzGwhc3ozZH4wYLLFApwsuOM9Iw'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
};

    return (
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <ul>
              {data.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
        </div>
      );

  };
  
  export default DataFetcher;