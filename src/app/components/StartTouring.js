"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TButton from "./TourButton.js";
//import "../globals.css";
import "../page.module.css";
import Box from "@mui/material/Box";
//import Container from "@mui/material/Container";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
//import BottomNavTours from "./BottomNavTours.js";
//import BottomNavMaps from "./BottomNavMaps.js";
import TourOptionsForm from "./TourOptionsChecklist.js";
import { redirect } from 'next/navigation'


//the parent component

const Title = () => {
  return (
    <Image
      //className={styles.logo}
      src="/img/purple-welcome.png"
      alt="Welcome"
      width={356}
      height={250}
      priority
    />
  );
};
export { Title };

export default function StartTour({ onSubmit }) {
  const [state, setState] = useState({}); // State for form data

  const handleFormSubmit = (data) => {
    // Handle form submission logic here
    console.log("Form data submitted:", data);

    if (data.buildings === true){
      window.location.href = "../tours/(purple-tours)/purple-b"
   
   {/*}
    } else if 
      (data.buildings && data.statues) {
      redirect("../tours/(purple-tours)/purple-b-s")
    } else if 
    (data.buildings && data.statues && data.landmarks) {
    redirect("../tours/(purple-tours)/purple-b-l-s")
  } else if 
    (data.statues) {
    redirect("../tours/(purple-tours)/purple-s")
  }
  else if 
    (data.statues && data.landmarks) {
    redirect("../tours/(purple-tours)/purplel-s")
  }
  else if 
    (data.landmarks) {
    redirect("../tours/(purple-tours)/purple-l")
  }
  else if 
    (data.landmarks && data.buildings) {
    redirect("../tours/(purple-tours)/purple-b-l")
    */}
  }
  else{
    console.log ("That didn't work.")
  }
}
  

  

  return (
    <Box xs={{ flexgrow: 1, height: "100%" }}>
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        rowSpacing={0}
        paddingTop={2}
      >
        <Grid
          container
          spacing={2}
          rowSpacing={-2}
          item
          xs={12}
          paddingTop={4}
          justifyContent="center"
        >
          <Title />
        </Grid>
        <Grid
          container
          spacing={2}
          rowSpacing={-2}
          item
          xs={12}
          paddingTop={4}
          justifyContent="center"
        >
          <TourOptionsForm formData={state} onSubmit={handleFormSubmit} />

        </Grid>
      </Grid>
    </Box>
  );
}
