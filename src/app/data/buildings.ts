type RawBuilding = [string, number, number];

type Building = {
    key: string;
    name: string;
    lat: number;
    lng: number;
};

const buildings: RawBuilding[] = [

 ["Crumlin Road Gaol", 54.609589686911356, -5.942150323272715],
 ["Crumlin Road Courthouse", 54.60869323459317, -5.942640928942047],
 ["The Linen Hall", 54.597716857004805, -5.931591271269812],
 ["Voysey House", 54.57675552548586, -5.951477257779768],
 ["Riddell Hall", 54.57629559332741, -5.934817611743387],
 ["Custom House", 54.60180575806063, -5.922637157062103],
 ["The Merchant Hotel", 54.60128241761487, -5.925680815451423],
 ["The Titanic Hotel", 54.60798559545717, -5.908977326158166],
 ["Belfast City Hall", 54.596617288210005, -5.930042286615252],
 ["Belfast Cathedral, the Cathedral Church of St Anne", 54.602993322702154, -5.928552370341554],
 ["St George's Market", 54.59627070010794, -5.921965530797129],
 ["The Lanyon Building", 54.58461683745442, -5.935150073124921],
 ["The Ulster Hall", 54.59476577326982, -5.930962847997169],
    ];

const formatted: Building[] = buildings.map(([name, lat, lng]) => ({
    name,
    lat,
    lng,
    key: JSON.stringify({ name, lat, lng })
}));

export default formatted;