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

const clinics = [
    {
        "type": "clinic",
        "name": "Philadelphia Women's Center",
        "links": "https://www.thewomenscenters.com/philadelphiawomenscenter/",
        "addr": "777 Appletree St 7th floor, Philadelphia, PA 19106",
        "contacts": "1800-minor-abort",
        "otherInfo": "",
        "pillOffered": true,
        "pillInfo": "offered b4 9 months",
        "surgeryOffered": false,
        "surgeryInfo": "lorem ipsum",
         
        "long": 39.953560,
        "lat": -75.151930,
        "hours": "hours : hours"
    }
];

const attorneys = [
    {
        "type": "attorney",
        "name": "Defenders Association of Philadelphia",
        "links": "https://www.thewomenscenters.com/philadelphiawomenscenter/",
        "addr": "1441 Sansom St, Philadelphia, PA 19102",
        "contacts": "Attorney Elizabeth Flanagan (can text or call)",
        "phone": "(267) 293-9644",
        "email": "JudicialBypass@philadefender.org",
        "otherInfo": "",
        "long": 39.9596,
        "lat": -75.1924,
        "hours": "hours : hours"
    }
];


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


//this is janky to have the code pasted this many times lol
//should be fixed later
clinics.forEach((clinic) => {
    let marker = L.marker([clinic.long, clinic.lat], markerOptionsArr[0]);
    marker.bindPopup(clinic.name).openPopup();
    marker.addTo(map).on('click', function(e) {
        document.getElementById("name-label").innerText = clinic.name;
        document.getElementById("addr-label").innerText = clinic.addr;
        document.getElementById("hours-label").innerText = clinic.hours;

        document.getElementById("methods-info").style.display = "block";

        document.getElementById("contacts-label").innerHTML = clinic.contacts

        document.getElementById("pill-check").style.display = clinic.pillOffered ? "block" : "none"
        document.getElementById("pill-x").style.display = !clinic.pillOffered ? "block" : "none"
        document.getElementById("pill-info").innerHTML = clinic.pillInfo

        document.getElementById("surgical-check").style.display = clinic.surgeryOffered ? "block" : "none"
        document.getElementById("surgical-x").style.display = !clinic.surgeryOffered ? "block" : "none"
        document.getElementById("surgical-info").innerHTML = clinic.surgeryInfo
    });
});

attorneys.forEach((attorney) => {
    let marker = L.marker([attorney.long, attorney.lat], markerOptionsArr[1]);
    marker.bindPopup(attorney.name).openPopup();
    marker.addTo(map).on('click', function(e) {
        document.getElementById("name-label").innerText = attorney.name;
        document.getElementById("addr-label").innerText = attorney.addr;
        document.getElementById("hours-label").innerText = attorney.hours;

        document.getElementById("contacts-label").innerHTML = attorney.contacts

        document.getElementById("methods-info").style.display = "none";
    });
});

courthouses.forEach((courthouse) => {
    let marker = L.marker([courthouse.long, courthouse.lat], markerOptionsArr[2]);
    marker.bindPopup(courthouse.name).openPopup();
    marker.addTo(map).on('click', function(e) {
        document.getElementById("name-label").innerText = courthouse.name;
        document.getElementById("addr-label").innerText = courthouse.addr;
        document.getElementById("hours-label").innerText = courthouse.hours;

        document.getElementById("contacts-label").innerHTML = courthouse.contacts

        document.getElementById("methods-info").style.display = "none";
    });
});

function quickLeave() {
    window.location.href = 'https://www.sephora.com';
}
