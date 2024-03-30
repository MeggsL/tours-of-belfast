type RawQuietSpot = [string, number, number];

type QuietSpot = {
    key: string;
    name: string;
    lat: number;
    lng: number;
};

const spots: RawQuietSpot[] = [

 ["Bench - Belfast City Hall", 54.596915014281, -5.929266650996174],
 ["Dark, cosy pub - White's Tavern", 54.600178616965685, -5.928476735745936],
 ["Coffee House - Starbucks", 54.595263381466246, -5.928251522487488],
 ["Shopping Centre - CastleCourt", 54.60089987292416, -5.931363254698043],
 ["Shopping Centre - Victoria Square", 54.59820050194058, -5.926550048524812],
 ["Bench - Arthur Street", 54.598157026905284, -5.927845258541258],
 ["Bench - Fountain Street", 54.597824240724, -5.931800043792969],
    ];

const formatted: QuietSpot[] = spots.map(([name, lat, lng]) => ({
    name,
    lat,
    lng,
    key: JSON.stringify({ name, lat, lng })
}));

export default formatted;