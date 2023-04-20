// Creating the map object
var Map = L.map("map", {
  center: [39.828175, -98.5795],
  zoom: 5
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

// Use this link to get the GeoJSON data.
var link = "https://data-nces.opendata.arcgis.com/datasets/nces::public-school-characteristics-2020-21.geojson?outSR=%7B%22latestWkid%22%3A4326%2C%22wkid%22%3A4326%7D";

// Getting our GeoJSON data
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(Map);
});