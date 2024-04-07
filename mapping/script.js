/*
777 Appletree St 7th floor, Philadelphia, PA 19106
39.953560 -75.151930
https://maps.app.goo.gl/X2KCULncJkLm9MReA

2751 Comly Rd, Philadelphia, PA 19154 
40.103990 -75.000660
https://maps.app.goo.gl/5pd2pSFdiLwv94Uv7

1144 Locust St, Philadelphia, PA 19107
39.947472 -75.160683
https://maps.app.goo.gl/Ko5B7xx3msH4yQmf8

317 Broadway, Camden, NJ 08103
39.941010 -75.119560
https://maps.app.goo.gl/uTQkX8gZ2PJ4g5Qy7

502 Kings Hwy N, Cherry Hill, NJ 08034
39.926830 -74.996742
https://maps.app.goo.gl/oPCjt3AQcD39dc5CA

1501 Arch St, Philadelphia, PA 19102
39.95512993309987, -75.1652010117053
https://maps.app.goo.gl/32rnpqoDT8SvK6f48

1441 Sansom St, Philadelphia, PA 19102
39.95034245750883, -75.16560438125407
https://maps.app.goo.gl/GBvmrWURNe44vKTM9
*/

const map_item_info = {
    "type": "",
    "name": "",
    "links": "",
    "addr": "",
    "contacts": "",
    "otherInfo": "",
    "pillOffered": false,
    "pillInfo": "",
    "surgeryOffered": false,
    "surgeryInfo": "",
    "long": 0,
    "lat": 0,
    "hours": "hours : hours",
    "transport": ""
}

// const test = Object.freeze(map_item_info);
// test.name = "test" //this shouldnt change map_item_info
// console.log(map_item_info.name) //it does



const courthouses = [
    {
        "type": "courthouse",
        "name": "Family Court",
        "links": "https://www.thewomenscenters.com/philadelphiawomenscenter/",
        "addr": "1501 Arch St, Philadelphia, PA 19102",
        "otherInfo": "This is where the judicial bypass hearing will take place in-person",
        "long": 39.9596,
        "lat": -75.1914,
        "hours": "hours : hours",
        "contacts":"contact goes here"
    }
];

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

// markerOptionsIcons = {
//     clinic: 'marker_clinic.png',
//     attorney: 'marker_attorney.png',
//     courthouse: 'marker_courthouse.png'
// }
var markerImages = ['marker_clinic.png', 'marker_attorney.png', 'marker_courthouse.png']

var markerOptionsArr = []

markerImages.forEach((element) => {
    var markerOptions = {
        clickable: true,
        icon: L.icon({
            iconUrl: element,
            // iconUrl: 'map_marker_red.png',
            iconSize: [40, 40]
        })
    }
    markerOptionsArr.push(markerOptions)
});

// var marker = L.marker([39.9596, -75.1904], markerOptions);
// marker.bindPopup('Burger popup').openPopup();
// marker.addTo(map);

// var startingPos = [39.9596, -75.1904]
// const markersArr = {}


// for (let i = 0; i < 10; i++) {
//     // markersArr.push([startingPos[0],startingPos[1]+0.001*i])
//     markersArr["id" + i * 10] = {
//         "name": "clinic"+i,
//         "links": "https://example.com",
//         "hours": "9-5 mon-fri",
//         "contacts": "1800-minor-abort",
//         "otherInfo": "",
//         "pillOffered": true,
//         "pillInfo": "offered b4 9 months",
//         "surgeryOffered": false,
//         "surgeryInfo": "lorem ipsum",
//         "long": startingPos[0],
//         "lat": startingPos[1] + 0.001 * i
//     }
//     console.log(markersArr["id" + i * 10])
// }

// console.log(markersArr)

// for (const key in markersArr) {
//     // console.log(`Key: ${key}, Value: ${markersArr[key]}`);
//     var currentMarker = markersArr[key]
//     var marker = L.marker([currentMarker.long, currentMarker.lat], markerOptions);
//     marker.bindPopup(markersArr[key].name).openPopup();
//     marker.addTo(map).on('click', function(e) {
//         // for (const item in ["name"]) {
//             document.getElementById("name-label").innerText = markersArr[key]["name"];
//         // }
//     });
// }


map_items.forEach((map_item) => {
    console.log(map_item)
    var index = 0;
    switch (map_item.type) {
        case "clinic": index = 0;
        case "attorney": index = 1;
        case "courthouse": index = 2;
    }
    let marker = L.marker([map_item.long, map_item.lat], markerOptionsArr[index]);
    marker.bindPopup(map_item.name).openPopup();
    marker.addTo(map).on('click', function (e) {
        document.getElementById("name-label").innerText = map_item.name;
        document.getElementById("addr-label").innerText = map_item.addr;
        document.getElementById("hours-label").innerText = map_item.hours;
        document.getElementById("contacts-label").innerHTML = map_item.contacts
        document.getElementById("methods-info").style.display = "none";
        console.log(map_item.type)
        if (map_item.type == "clinic") {
            document.getElementById("methods-info").style.display = "block";
            document.getElementById("pill-check").style.display = map_item.pillOffered ? "block" : "none"
            document.getElementById("pill-x").style.display = !map_item.pillOffered ? "block" : "none"
            document.getElementById("pill-info").innerHTML = map_item.pillInfo
            document.getElementById("surgical-check").style.display = map_item.surgeryOffered ? "block" : "none"
            document.getElementById("surgical-x").style.display = !map_item.surgeryOffered ? "block" : "none"
            document.getElementById("surgical-info").innerHTML = map_item.surgeryInfo
        }
    });
});

function quickLeave() {
    window.location.href = 'https://www.sephora.com';
}
