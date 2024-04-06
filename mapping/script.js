const clinics = [
    {
        "name": "Philadelphia Women's Center",
        "links": "https://www.thewomenscenters.com/philadelphiawomenscenter/",
        "addr": "777 Appletree St 7th floor, Philadelphia, PA 19106",
        "contacts": "1800-minor-abort",
        "otherInfo": "",
        "pillOffered": true,
        "pillInfo": "offered b4 9 months",
        "surgeryOffered": false,
        "surgeryInfo": "lorem ipsum",
        "long": 39.9596,
        "lat": -75.1904
    }
];

const attorneys = [
    {
        "name": "Defenders Association of Philadelphia",
        "links": "https://www.thewomenscenters.com/philadelphiawomenscenter/",
        "addr": "1441 Sansom St, Philadelphia, PA 19102",
        "contacts": "Attorney Elizabeth Flanagan (can text or call)",
        "phone": "(267) 293-9644",
        "email": "JudicialBypass@philadefender.org",
        "otherInfo": "",
        "long": 39.9596,
        "lat": -75.1924
    }
];

const courthouses = [
    {
        "name": "Family Court",
        "links": "https://www.thewomenscenters.com/philadelphiawomenscenter/",
        "addr": "1501 Arch St, Philadelphia, PA 19102",
        "otherInfo": "This is where the judicial bypass hearing will take place in-person",
        "long": 39.9596,
        "lat": -75.1914
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
var markerImages = ['marker_clinic.png','marker_attorney.png','marker_courthouse.png']

var markerOptionsArr = []

markerImages.forEach((element)=>{
    var markerOptions = {
        clickable: true,
        icon: L.icon( {
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

clinics.forEach((clinic) => {
    let marker = L.marker([clinic.long, clinic.lat], markerOptionsArr[0]);
    marker.bindPopup(clinic.name).openPopup();
    marker.addTo(map).on('click', function(e) {
        document.getElementById("name-label").innerText = clinic.name;
        document.getElementById("methods-info").style.display = "block";
    });
});

attorneys.forEach((attorney) => {
    let marker = L.marker([attorney.long, attorney.lat], markerOptionsArr[1]);
    marker.bindPopup(attorney.name).openPopup();
    marker.addTo(map).on('click', function(e) {
        document.getElementById("name-label").innerText = attorney.name;
        document.getElementById("methods-info").style.display = "none";
    });
});

courthouses.forEach((courthouse) => {
    let marker = L.marker([courthouse.long, courthouse.lat], markerOptionsArr[2]);
    marker.bindPopup(courthouse.name).openPopup();
    marker.addTo(map).on('click', function(e) {
        document.getElementById("name-label").innerText = courthouse.name;
        document.getElementById("methods-info").style.display = "none";
    });
});