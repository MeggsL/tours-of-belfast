import React from "react";
import "./blueygrey.css";
import "./bg-page.module.css";
import BlueyGreyHomepage from "./bluey-components/HomepageBluey.js";

<html lang="en">
  <head>
    <meta
      name="viewport"
      content="initial-scale=1, width=device-width, no-cache"
      http-equiv="cache-control"
    />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function BlueyApp() {
  return (
    <main>
      <div className="body">
        <BlueyGreyHomepage />
      </div>
    </main>
  );
}