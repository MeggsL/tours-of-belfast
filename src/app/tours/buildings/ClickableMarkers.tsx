//"use client";

//import BlueMap from "../(tour-components)/(maps)/BlueMap.jsx";
  //import BuildingMarkers from "./(markers)/BuildingMarkers";


  async function initMap() {
    // Request needed libraries.
    const { Map, InfoWindow } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    const map = new Map(document.getElementById("map") as HTMLElement, {
        zoom: 12,
        center: { lat: 54.596747841427444, lng: -5.930042284658504 },
        mapId: '9efae32f7fd65c2',
    });

    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const tourStops = [
      {
        position: { lat: 54.609589686911356, lng: -5.942150323272715 }, 
        title: "Crumlin Road Gaol: "
    },
    {
        position: { lat: 54.60869323459317, lng:  -5.942640928942047 }, 
        title: "Crumlin Road Courthouse: "
    },
    {
        position: { lat: 54.60180575806063, lng:  -5.922637157062103 }, 
        title: "Custom House: "
    },
    {
        position: { lat: 54.60798559545717, lng:-5.908977326158166 }, 
        title: "The Merchant Hotel: "
    },
    {
        position: { lat:  54.58461683745446, lng: -5.935150073124921 }, 
        title: "The Lanyon Building: "
    },
    ];

    // Create an info window to share between markers.
    const infoWindow = new InfoWindow();

    // Create the markers.
    tourStops.forEach(({position, title}, i) => {
        const pin = new PinElement({
            glyph: `${i + 1}`,
        });

        const marker = new AdvancedMarkerElement({
            position,
            map,
            title: `${i + 1}. ${title}`,
            content: pin.element,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener('click', ({ domEvent, latLng }) => {
            const { target } = domEvent;
            infoWindow.close();
            infoWindow.setContent(marker.title);
            infoWindow.open(marker.map, marker);
        });
    });
}

export { initMap }