type RawStatue = [string, number, number];

type Statue = {
    key: string;
    name: string;
    lat: number;
    lng: number;
};

const statues: RawStatue[] = [

 ["The Big Fish", 54.60189395768554, -5.921502131700905],
 ["Beacon of Hope",54.59963348933054, -5.921414815904341],
 ["The Masts",54.59781682270067, -5.930000576927606],
 ["Spirit of Belfast",54.598735724784746, -5.927203822007786],
 ["The Speaker",54.601760656343615, -5.922877875422609],
 ["Queen Victoria Memorial",54.59710998888028, -5.930102672227253],
 ["Edward James Harland Statue", 54.596978944323375, -5.930963804258214],
 ["Ella Pirrie Statue", 54.58660083143135, -5.941619475498827],
    ];

const formatted: Statue[] = statues.map(([name, lat, lng]) => ({
    name,
    lat,
    lng,
    key: JSON.stringify({ name, lat, lng })
}));

export default formatted;