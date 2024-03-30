type RawLandmark = [string, number, number];

type Landmark = {
    key: string;
    name: string;
    lat: number;
    lng: number;
};

const landmarks: RawLandmark[] = [

 ["Belfast City Hall", 54.596617288210005, -5.930042286615252],
 ["Belfast Cathedral, the Cathedral Church of St Anne", 54.602993322702154, -5.928552370341554],
 ["St George's Market", 54.59627070010794, -5.921965530797129],
 ["The Lanyon Building", 54.58461683745442, -5.935150073124921],
 ["The Crown Liquor Saloon", 54.59485088167495, -5.93406096848945],
 ["Albert Memorial Clock", 54.600963995770734, -5.924299000105962],
 ["Monument to the Unknown Woman Worker", 54.594659184522826, -5.9346151307971935],
 ["Henry Cooke Monument", 54.59728103593597, -5.934786146142514],
 ["Memorial to World War I and II Soldiers", 54.596349193411925, -5.93095113079713],
 ["The Titanic Memorial Garden", 54.5968795897582, -5.929012283834349],
    ];

const formatted: Landmark[] = landmarks.map(([name, lat, lng]) => ({
    name,
    lat,
    lng,
    key: JSON.stringify({ name, lat, lng })
}));

export default formatted;