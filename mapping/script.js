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

var iconOptions = {
    iconUrl: 'map_marker_red.png',
    iconSize: [30, 30]
}
var customIcon = L.icon(iconOptions);

var markerOptions = {
    // title: "MyLocation",
    clickable: true,
    icon: customIcon
}
// var marker = L.marker([39.9596, -75.1904], markerOptions);
// marker.bindPopup('Burger popup').openPopup();
// marker.addTo(map);

var startingPos = [39.9596, -75.1904]
var markersArr = {}


for (let i = 0; i < 10; i++) {
    // markersArr.push([startingPos[0],startingPos[1]+0.001*i])
    markersArr["id"+i*10] = {
        "id": i * 10,
        "type": "clinic",
        "long": startingPos[0],
        "lat": startingPos[1]+0.001*i
    }
    console.log(markersArr["id"+i*10])
}

window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('addMarker').addEventListener('click', function () {
        for ((id, mark) in markersArr){
            var marker = L.marker([mark.lat,mark.long], markerOptions);
            marker.bindPopup(pos.toString()).openPopup();
            marker.addTo(map);
        }
        
    });

});