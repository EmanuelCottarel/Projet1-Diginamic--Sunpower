// Map Leaflet

let map = L.map('map').setView([43.610769, 3.876716], 12);



L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//Marqueurs

//PRADEO
const marker1 = L.marker([43.567044, 3.943067]).addTo(map);
marker1.bindPopup("<b>Pradeo</b><br>Nombre d'ombrelles: 3<br>Capacité: 12 Wh").openPopup();

//GREENX
const marker2 = L.marker([43.57119189294555, 3.944850180592113]).addTo(map);
marker2.bindPopup("<b>Greenx</b><br>Nombre d'ombrelles: 7<br>Capacité: 23 Wh").openPopup();

//E3
const marker3 = L.marker([43.580029830572066, 3.930319133070283]).addTo(map);
marker3.bindPopup("<b>e3</b><br>Nombre d'ombrelles: 5<br>Capacité: 18 Wh").openPopup();

//EXPX
const marker4 = L.marker([43.5767955843162, 3.918006132209793]).addTo(map);
marker4.bindPopup("<b>ExpX</b><br>Nombre d'ombrelles: 2<br>Capacité: 12 Wh").openPopup();

//PROSAIC
const marker5 = L.marker([43.57292250029829, 3.910868572186806]).addTo(map);
marker5.bindPopup("<b>Prosaic</b><br>Nombre d'ombrelles: 3<br>Capacité: 17 Wh").openPopup();

//TESTAM
const marker6 = L.marker([43.575271102211566, 3.905550948258604]).addTo(map);
marker6.bindPopup("<b>testam</b><br>Nombre d'ombrelles: 3<br>Capacité: 12 Wh").openPopup();

//LOOPX
const marker7 = L.marker([43.588998746115195, 3.922262375095761]).addTo(map);
marker7.bindPopup("<b>loopX</b><br>Nombre d'ombrelles: 6<br>Capacité: 32 Wh").openPopup();

//SOAPL
const marker8 = L.marker([43.593426867911354, 3.908214747604587]).addTo(map);
marker8.bindPopup("<b>soapL</b><br>Nombre d'ombrelles: 6<br>Capacité: 13 Wh").openPopup();

//DIGIGI
const marker9 = L.marker([43.599275741161804, 3.8797166221546115]).addTo(map);
marker9.bindPopup("<b>Digigi</b><br>Nombre d'ombrelles: 7<br>Capacité: 45 Wh").openPopup();

//SUNX
const marker10 = L.marker([43.60519267120589, 3.8639512413617707]).addTo(map);
marker10.bindPopup("<b>loopX</b><br>Nombre d'ombrelles: 1<br>Capacité: 7 Wh").openPopup();

//FREAKZ
const marker11 = L.marker([43.62164407845158, 3.881687511542558]).addTo(map);
marker11.bindPopup("<b>freakZ</b><br>Nombre d'ombrelles: 3<br> Capacité: 16 Wh").openPopup();

// //ESPERA
// const marker12 = L.marker([43.62596089414691, 3.841287595793522]).addTo(map);
// marker12.bindPopup("<b>espera</b><br>Nombre d'ombrelles: 4<br> Capacité: 15 Wh").openPopup();



// Ajout d'un repere avec une popup sur la carte
const latitude = document.querySelector("#latitude");
const longitude = document.querySelector("#longitude");
const client = document.querySelector("#client");
const nbrOmbrelle = document.querySelector("#nbrOmbrelle");
const capInstal = document.querySelector("#capInstal");
const boutonMap = document.querySelector("#map__submit");



//CREATION D'UN NOUVEAU MARQUEUR
function creerMarqueur(){
    const marker13 = L.marker([latitude.value, longitude.value]).addTo(map);
    marker13.bindPopup(`<b>${client.value}</b><br>Nombre d'ombrelles: ${nbrOmbrelle.value}<br> Capacité: ${capInstal.value} Wh`).openPopup();
}

//Soumission du formulaire
boutonMap.onclick= function(event){
    //Stopper le rechargement de la page
    event.preventDefault()
    creerMarqueur();
}