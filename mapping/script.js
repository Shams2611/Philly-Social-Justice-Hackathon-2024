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
    "hours": "hours : hours"
}

// const test = Object.freeze(map_item_info);
// test.name = "test" //this shouldnt change map_item_info
// console.log(map_item_info.name) //it does


// clinics = [
//     {
//         "type": "clinic",
//         "name": "Philadelphia Women's Center",
//         "links": "https://www.thewomenscenters.com/philadelphiawomenscenter/",
//         "addr": "777 Appletree St 7th floor, Philadelphia, PA 19106",
//         "contacts": "1800-minor-abort",
//         "phone": "",
//         "email": "",
//         "otherInfo": "",
//         "pillOffered": true,
//         "pillInfo": "offered b4 9 months",
//         "surgeryOffered": false,
//         "surgeryInfo": "lorem ipsum",
//         "long": 39.953560,
//         "lat": -75.151930,
//         "hours": "hours : hours"
//     }
// ];

var map_items = []
for (let i = 0; i < 8; i++){
    map_items.push(map_item_info);
}

//clinic 1
map_items[0].type = "clinic"
map_items[0].name = "!!!"
map_items[0].links = "!!!"
map_items[0].addr = "777 Appletree St 7th floor, Philadelphia, PA 19106"
map_items[0].contacts = "(215) 574-3590"
map_items[0].phone = "!!!"
map_items[0].email = "!!!"
map_items[0].pillOffered = true;
map_items[0].pillInfo = "one two three";
map_items[0].surgeryOffered = false;
map_items[0].surgeryInfo = "lorem ipsum";
map_items[0].long = "39.953560"
map_items[0].lat = "-75.151930"

//clinic 2
map_items[1].type = "clinic"
map_items[1].name = "!!!"
map_items[1].links = "!!!"
map_items[1].addr = "777 Appletree St 7th floor, Philadelphia, PA 19106"
map_items[1].contacts = "(215) 574-3590"
map_items[1].phone = "!!!"
map_items[1].email = "!!!"
map_items[1].pillOffered = true;
map_items[1].pillInfo = "one two three";
map_items[1].surgeryOffered = false;
map_items[1].surgeryInfo = "lorem ipsum";
map_items[1].long = "39.953560"
map_items[1].lat = "-75.151930"

//clinic 3
map_items[2].type = "clinic"
map_items[2].name = "!!!"
map_items[2].links = "!!!"
map_items[2].addr = "777 Appletree St 7th floor, Philadelphia, PA 19106"
map_items[2].contacts = "(215) 574-3590"
map_items[2].phone = "!!!"
map_items[2].email = "!!!"
map_items[2].pillOffered = true;
map_items[2].pillInfo = "one two three";
map_items[2].surgeryOffered = false;
map_items[2].surgeryInfo = "lorem ipsum";
map_items[2].long = "39.953560"
map_items[2].lat = "-75.151930"

//clinic 4
map_items[3].type = "clinic"
map_items[3].name = "!!!"
map_items[3].links = "!!!"
map_items[3].addr = "777 Appletree St 7th floor, Philadelphia, PA 19106"
map_items[3].contacts = "(215) 574-3590"
map_items[3].phone = "!!!"
map_items[3].email = "!!!"
map_items[3].pillOffered = true;
map_items[3].pillInfo = "one two three";
map_items[3].surgeryOffered = false;
map_items[3].surgeryInfo = "lorem ipsum";
map_items[3].long = "39.953560"
map_items[3].lat = "-75.151930"

//clinic 5
map_items[4].type = "clinic"
map_items[4].name = "!!!"
map_items[4].links = "!!!"
map_items[4].addr = "777 Appletree St 7th floor, Philadelphia, PA 19106"
map_items[4].contacts = "(215) 574-3590"
map_items[4].phone = "!!!"
map_items[4].email = "!!!"
map_items[4].pillOffered = true;
map_items[4].pillInfo = "one two three";
map_items[4].surgeryOffered = false;
map_items[4].surgeryInfo = "lorem ipsum";
map_items[4].long = "39.953560"
map_items[4].lat = "-75.151930"

// courthouse1 = map_item_info
map_items[5].type = "courthouse"
map_items[5].name = "Family Court"
map_items[5].links = "https://www.thewomenscenters.com/philadelphiawomenscenter/"
map_items[5].addr = "1501 Arch St, Philadelphia, PA 19102"
map_items[5].contacts = "!!!"
map_items[5].phone = "!!!"
map_items[5].email = "!!!"
map_items[5].long = "39.95512993309987"
map_items[5].lat = "-75.1652010117053"

// attorney1 = map_item_info
map_items[6].type = "attorney"
map_items[6].name = "Defenders Association of Philadelphia - Child Advocacy Unit"
map_items[6].links = "https://www.thewomenscenters.com/philadelphiawomenscenter/"
map_items[6].addr = "1441 Sansom ST, Philadelphia, PA 19102"
map_items[6].contacts = "Attorney Elizabeth Flanagan (can text or call)"
map_items[6].phone = "(267)-293-9644"
map_items[6].email = "JudicialBypass@philadefender.org"
map_items[6].long = "39.9565"
map_items[6].lat = "-75.1924"

// const map_items = [
//     courthouse1,
//     attorney1,
//     clinic1,
//     // clinic2,
//     // clinic3,
//     // clinic4,
//     // clinic5
// ]

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