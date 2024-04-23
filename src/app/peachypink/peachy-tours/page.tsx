import React from "react";
import "../../peachypink/peachypink.css";
import "../pp-page.module.css";
import StartTour from "../peachy-components/StartTouringPeachy";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function TakeATour() {
  return (
    <main className="main">
      <div>
  <StartTour onSubmit={undefined} />
      </div>
    </main>
  );
}
