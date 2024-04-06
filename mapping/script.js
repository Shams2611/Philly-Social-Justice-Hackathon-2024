var map = L.map('map').setView([39.9596, -75.1904], 18);

L.tileLayer('https://api.maptiler.com/maps/streets-v2-light/{z}/{x}/{y}.png?key=itORzsoRJTMoPJkSZRLH', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    minZoom: 12,
    zoomSnap: 0.25,
    id: 'mapbox.streets',
}).addTo(map);

// var marker = new L.Marker([39.9596, -75.1904]);
// marker.addTo(map);

var clinicIconOptions = {
    iconUrl: 'map_marker_red.png',
    iconSize: [30, 30]
}
var attorneyIconOptions = {
    iconUrl: 'map_marker_red.png',
    iconSize: [30, 30]
}

var courthouseIconOptions = {
    iconUrl: 'map_marker_red.png',
    iconSize: [30, 30]
}

// var iconOptions = {
//     iconUrl: 'map_marker_red.png',
//     iconSize: [30, 30]
// }
// var customIcon = L.icon( {
//     iconUrl: 'map_marker_red.png',
//     iconSize: [30, 30]
// });

markerOptionsArr = []
for (const name in ["clinics",""]){

}
var markerOptions = {
    // title: "MyLocation",
    clickable: true,
    icon: L.icon( {
        iconUrl: 'map_marker_red.png',
        iconSize: [30, 30]
    })
}
// var marker = L.marker([39.9596, -75.1904], markerOptions);
// marker.bindPopup('Burger popup').openPopup();
// marker.addTo(map);

var startingPos = [39.9596, -75.1904]
const markersArr = {}


for (let i = 0; i < 10; i++) {
    // markersArr.push([startingPos[0],startingPos[1]+0.001*i])
    markersArr["id" + i * 10] = {
        "name": "clinic"+i,
        "links": "https://example.com",
        "hours": "9-5 mon-fri",
        "contacts": "1800-minor-abort",
        "otherInfo": "",
        "pillOffered": true,
        "pillInfo": "offered b4 9 months",
        "surgeryOffered": false,
        "surgeryInfo": "lorem ipsum",
        "long": startingPos[0],
        "lat": startingPos[1] + 0.001 * i
    }
    console.log(markersArr["id" + i * 10])
}

console.log(markersArr)

for (const key in markersArr) {
    // console.log(`Key: ${key}, Value: ${markersArr[key]}`);
    var currentMarker = markersArr[key]
    var marker = L.marker([currentMarker.long, currentMarker.lat], markerOptions);
    marker.bindPopup(markersArr[key].name).openPopup();
    marker.addTo(map).on('click', function(e) {
        // for (const item in ["name"]) {
            document.getElementById("name-label").innerText = markersArr[key]["name"];
        // }
    });
}