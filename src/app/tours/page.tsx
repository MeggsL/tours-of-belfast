import React from "react";
import TourTable from "../../components/TourTable.js";
import styles from "../page.module.css";
import "../globals.css";
//import TourCarousel from "../../components/ToursCarousel.js";
//import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <main>
      <div>
      <TourTable />
    </div>
    </main>
  );
}
