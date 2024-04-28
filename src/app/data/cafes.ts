type RawCafe = [string, number, number, string];

type Cafe = {
    key: string;
    name: string;
    lat: number;
    lng: number;
    info: string;
};

const spots: RawCafe[] = [

 
 ["Dark, cosy pub - White's Tavern", 54.600178616965685, -5.928476735745936, "Low ceilings and lighting with cozy nooks and cold pints."],
 ["Coffee House - Starbucks", 54.595263381466246, -5.928251522487488, "Clean, modern setting with high ceilings."],
    ];

const formatted: Cafe[] = spots.map(([name, lat, lng, info]) => ({
    name,
    lat,
    lng,
    info,
    key: JSON.stringify({ name, lat, lng, info})
}));

export default formatted;