type RawAttraction = [string, string, string, string, string];

type Attraction = {
    key: string;
    building: string;
    statue: string;
    artwork: string;
    landmark: string;
    monument: string;
};

const attractions: RawAttraction[] = [

    ["buildings", "statues", "artworks", "landmarks", "monuments"]

];

const formatted: Attraction[] = attractions.map(([building, statue, artwork, landmark, monument]) => ({
    building,
    statue,
    artwork,
    landmark,
    monument,
    key: JSON.stringify({ building, statue, artwork, landmark, monument })
}));

export default formatted;