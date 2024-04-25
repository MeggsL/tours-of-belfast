import React from "react";
import "../../blueygrey.css";
import "../../bg-page.module.css";
import StartTour from "../../bluey-components/StartTouringBluey";

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
