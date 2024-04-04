type RawQuietSpot = [string, number, number, string];

type QuietSpot = {
    key: string;
    name: string;
    lat: number;
    lng: number;
    info: string;
};

const spots: RawQuietSpot[] = [

 ["Bench - Belfast City Hall", 54.596915014281, -5.929266650996174, "Wooden bench with views of City Hall."],
 ["Dark, cosy pub - White's Tavern", 54.600178616965685, -5.928476735745936, "Low ceilings and lighting with cozy nooks and cold pints."],
 ["Coffee House - Starbucks", 54.595263381466246, -5.928251522487488, "Clean, modern setting with high ceilings."],
 ["Shopping Centre - CastleCourt", 54.60089987292416, -5.931363254698043, "Clean, modern, with bright lighting and plenty of seating."],
 ["Shopping Centre - Victoria Square", 54.59820050194058, -5.926550048524812, "Clean, modern, open air with greenery. Beautiful atrium."],
 ["Bench - Arthur Street", 54.598157026905284, -5.927845258541258, "Bench in middle of pedestrian street. Surrounded by lovely buildings."],
 ["Bench - Fountain Street", 54.597824240724, -5.931800043792969, "Comfy bench where you can blend into the background."],
    ];

const formatted: QuietSpot[] = spots.map(([name, lat, lng, info]) => ({
    name,
    lat,
    lng,
    info,
    key: JSON.stringify({ name, lat, lng, info})
}));

export default formatted;