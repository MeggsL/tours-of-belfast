type RawUser= [string, number, number, string];


type User = {
    key: string;
    name: string;
    lat: number;
    lng: number;
    info: string;

};

const me: RawUser[] = [

 ["Europa Buscentre", 54.59505689461956, -5.935953016608538, "Here I am!"]
    ];

const formatted: User[] = me.map(([name, lat, lng, info]) => ({
    name,
    lat,
    lng,
    info,
    key: JSON.stringify({ name, lat, lng, info })
}));

export default formatted;