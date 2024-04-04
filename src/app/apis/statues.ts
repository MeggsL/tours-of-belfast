type RawStatue = [string, number, number, string];

type Statue = {
    key: string;
    name: string;
    lat: number;
    lng: number;
    info: string;
};

const statues: RawStatue[] = [

 ["The Big Fish", 54.60189395768554, -5.921502131700905, "It's a big 'un alright."],
 ["Beacon of Hope",54.59963348933054, -5.921414815904341, "Affectionately known as'Nuala-with-a-hula'."],
 ["The Masts",54.59781682270067, -5.930000576927606, "Representing the masts of historic big ships built in Belfast."],
 ["Spirit of Belfast",54.598735724784746, -5.927203822007786, "A hot spot of buskers and activity on nice days."],
 ["The Speaker",54.601760656343615, -5.922877875422609, "In front of Custom House."],
 ["Queen Victoria Memorial",54.59710998888028, -5.930102672227253, "Many present-day Belfast structures from Victorian era."],
 ["Edward James Harland Statue", 54.596978944323375, -5.930963804258214, "He was half of Belfast's major ship-building operation."],
 ["Ella Pirrie Statue", 54.58660083143135, -5.941619475498827, "On the campus of Belfast City Hospital."],
    ];

const formatted: Statue[] = statues.map(([name, lat, lng, info]) => ({
    name,
    lat,
    lng,
    info,
    key: JSON.stringify({ name, lat, lng, info })
}));

export default formatted;