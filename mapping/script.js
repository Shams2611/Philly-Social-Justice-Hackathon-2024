console.log("this worked")

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
for (let i = 0; i < 7; i++){
    // const k = map_item_info
    // var k = 
    let clone = Object.assign({}, map_item_info)
    map_items.push(clone);
}

//clinic 1
map_items[0].type = "clinic"
map_items[0].name = "Philadelphia Women's Center"
map_items[0].links = "https://www.thewomenscenters.com/philadelphiawomenscenter/?keyword=&gad_source=1&gclid=Cj0KCQjw5cOwBhCiARIsAJ5njuZIosNBfgO4kUeUvnmES8_aSauq9zu6YeUEc4Px6N7Q0Wkg0CHTDkMaAuK1EALw_wcB"
map_items[0].addr = "777 Appletree St 7th floor, Philadelphia, PA 19106"
map_items[0].contacts = "(215) 574-3590"
map_items[0].phone = "(215) 574-3590"
map_items[0].email = "!!!"
map_items[0].pillOffered = true;
map_items[0].pillInfo = "until 11 weeks";
map_items[0].surgeryOffered = true;
map_items[0].surgeryInfo = "up to 23 weeks 6 days";
map_items[0].long = "39.953560"
map_items[0].lat = "-75.151930"
map_items[0].transport = "https://maps.app.goo.gl/X2KCULncJkLm9MReA"

//clinic 2
map_items[1].type = "clinic"
map_items[1].name = "Planned Parenthood"
map_items[1].links = "https://www.plannedparenthood.org/health-center/pennsylvania/philadelphia/19154/far-northeast-surgical-center-3441-91460/abortion"
map_items[1].addr = "2751 Comly Rd, Philadelphia, PA 19154"
map_items[1].contacts = "!!!"
map_items[1].phone = "(215) 464-2225 "
map_items[1].email = "!!!"
map_items[1].pillOffered = true;
map_items[1].pillInfo = "up to 11 weeks";
map_items[1].surgeryOffered = true;
map_items[1].surgeryInfo = "up to 16 weeks";
map_items[1].long = "40.103990"
map_items[1].lat = "-75.000660"
map_items[1].transport = "https://maps.app.goo.gl/5pd2pSFdiLwv94Uv7"


//clinic 3
map_items[2].type = "clinic"
map_items[2].name = "Planned Parenthood"
map_items[2].links = "https://www.plannedparenthood.org/health-center/pennsylvania/philadelphia/19107/locust-street-surgical-center-3360-91460/abortion"
map_items[2].addr = "1144 Locust St, Philadelphia, PA 19107"
map_items[2].contacts = "!!!"
map_items[2].phone = "(215) 351-5560 "
map_items[2].email = "!!!"
map_items[2].pillOffered = true;
map_items[2].pillInfo = "up to 11 weeks";
map_items[2].surgeryOffered = true;
map_items[2].surgeryInfo = "up to 15 weeks 6 days";
map_items[2].long = "39.947472"
map_items[2].lat = "-75.160683"
map_items[2].transport = "https://maps.app.goo.gl/Ko5B7xx3msH4yQmf8"


//clinic 4 - NJ
map_items[3].type = "clinic"
map_items[3].name = "Planned Parenthood"
map_items[3].links = "https://www.plannedparenthood.org/health-center/new-jersey/camden/08103/camden-center-3312-90900/abortion"
map_items[3].addr = "317 Broadway, Camden, NJ 08103"
map_items[3].contacts = ""
map_items[3].phone = "(856) 365-3519"
map_items[3].email = "!!!"
map_items[3].pillOffered = true;
map_items[3].pillInfo = "up to 11 weeks";
map_items[3].surgeryOffered = false;
map_items[3].surgeryInfo = "not offered";
map_items[3].long = "39.941010"
map_items[3].lat = "-75.119560"
map_items[3].transport = "https://maps.app.goo.gl/uTQkX8gZ2PJ4g5Qy7"


//clinic 5 - NJ
map_items[4].type = "clinic"
map_items[4].name = "Cherry Hill Women's Center"
map_items[4].links = "!!!"
map_items[4].addr = "502 Kings Hwy N, Cherry Hill, NJ 08034"
map_items[4].contacts = ""
map_items[4].phone = "(856) 667-5910 "
map_items[4].email = "!!!"
map_items[4].pillOffered = true;
map_items[4].pillInfo = "until 11 weeks";
map_items[4].surgeryOffered = true;
map_items[4].surgeryInfo = "until 27 weeks";
map_items[4].long = "39.926830"
map_items[4].lat = "-74.996742"
map_items[4].transport = "https://maps.app.goo.gl/oPCjt3AQcD39dc5CA"


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
map_items[5].transport = "https://maps.app.goo.gl/X2KCULncJkLm9MReA"


// attorney1 = map_item_info
map_items[6].type = "attorney"
map_items[6].name = "Defenders Association of Philadelphia - Child Advocacy Unit"
map_items[6].links = "https://www.thewomenscenters.com/philadelphiawomenscenter/"
map_items[6].addr = "1441 Sansom ST, Philadelphia, PA 19102"
map_items[6].contacts = "Attorney Elizabeth Flanagan (can text or call)"
map_items[6].phone = "(267)-293-9644" 
map_items[6].email = "JudicialBypass@philadefender.org "
map_items[6].long = "39.95034245750883"
map_items[6].lat = "-75.16560438125407"
map_items[6].transport = "https://maps.app.goo.gl/X2KCULncJkLm9MReA"


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
// }C:\Users\eland\Documents\GitHub\Philly-Social-Justice-Hackathon-2024\html5up-escape-velocity
var markerImages = ['../html5up-escape-velocity/images/marker_clinic.png', 'images/marker_attorney.png', '../html5up-escape-velocity/images/marker_courthouse.png']

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
    console.log(map_item.type)
    var index = 0;
    switch (map_item.type) {
        case "clinic": index = 0;
        break;
        case "attorney": index = 1;
        break;
        case "courthouse": index = 2;
        break;
    }
    console.log(index)
    let marker = L.marker([map_item.long, map_item.lat], markerOptionsArr[index]);
    marker.bindPopup(map_item.name).openPopup();
    marker.addTo(map).on('click', function (e) {
        document.getElementById("name-label").innerText = map_item.name;
        document.getElementById("addr-label").innerText = map_item.addr;
        document.getElementById("hours-label").innerText = map_item.hours;
        document.getElementById("contacts-label").innerHTML = map_item.contacts
        document.getElementById("methods-info").style.display = "none";
        document.getElementById("transportation-label").innerHTML = "<a href="+map_item.transport+">Google Maps Link</>";
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