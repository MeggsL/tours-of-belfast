// Add this function to your code
import React from "react";

export default function EmptyCache() {
    if ('caches' in window) {
      caches.keys().then((names) => {
        // Delete all cache files
        names.forEach((name) => {
          caches.delete(name);
        });
      });
      // Make sure the page reloads
    }
  }
  