// ===
// MAP
// ===
var map;
var fireMarker;
var fireMarkers = [];
var myPosition;
var myGoogle;

// Initialize map/
function initMap() {
  // Add services.
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  myGoogle = google;

  // Make new map.
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(-8.7832, 34.5085),
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

  // Connect service to map.
  directionsDisplay.setMap(map);

  // Center the map to user location.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      myPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      map.setZoom(17);
      map.setCenter(myPosition);
    });
  }

  // Make a temporary marker in San Francisco.
  var fireIcon = "img/icon.png"
  fireMarker = new google.maps.Marker({
    position: {lat: 37.7749, lng: -122.4194},
    map: map,
    icon: fireIcon
  });

  // AFRICA
  for (var i = 0; i < 10; i++)
  {
    var randomLat = (Math.random() * 100) + 1;
    var randomLng = (Math.random() * 50) + 1;
    var randomLocation = {lat: randomLat, lng: randomLng};
    var randomMarker = new google.maps.Marker({
      position: randomLocation,
      map: map,
      icon: fireIcon
    });

    randomMarker.addListener('click', function(){
      var loc = {lat: randomMarker.getPosition().lat(), lng: randomMarker.getPosition().lng()};
      openInfo(loc);
    });

    fireMarkers.push(randomMarker);
  }

  // AMERICA
  for (var i = 0; i < 10; i++)
  {
    var randomLat = (Math.random() * (49-24)) + 24;
    var randomLng = (Math.random() * (124-66)) + 66;
    var randomLocation = {lat: randomLat, lng: -randomLng};
    var randomMarker = new google.maps.Marker({
      position: randomLocation,
      map: map,
      icon: fireIcon
    });

    randomMarker.addListener('click', function(){
      var loc = {lat: randomMarker.getPosition().lat(), lng: randomMarker.getPosition().lng()};
      openInfo(loc);
    });

    fireMarkers.push(randomMarker);
  }

  // ASIA
  for (var i = 0; i < 10; i++)
  {
    var randomLat = (Math.random() * (49-24)) + 24;
    var randomLng = (Math.random() * (124-66)) + 66;
    var randomLocation = {lat: randomLat, lng: randomLng};
    var randomMarker = new google.maps.Marker({
      position: randomLocation,
      map: map,
      icon: fireIcon
    });

    randomMarker.addListener('click', function(){
      var loc = {lat: randomMarker.getPosition().lat(), lng: randomMarker.getPosition().lng()};
      openInfo(loc);
    });

    fireMarkers.push(randomMarker);
  }

  console.log(fireMarkers);
  fireMarkers.push(fireMarker);

  // Open info when marker is clicked.
  fireMarker.addListener('click', function(){
    var loc = {lat: fireMarker.getPosition().lat(), lng: fireMarker.getPosition().lng()};
    openInfo(loc);
  });

  // Add direction button.
  document.getElementById('dir').addEventListener('click', function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
}

// =============
// REPORT BUTTON
// =============

var reportButton = document.getElementById("reportButton");


function report() {
  map.addListener('click', action);

  return false;
}

function action(e) {
  placeMarker(e.latLng, map);
}

function stopNav() {
  map.removeEventListener('click', action);
}

// ======
// MARKER
// ======

var hasMarker = false;
var userMarker;

function placeMarker(latLng) {
  // Make a new marker if we don't have yet.
  if (!hasMarker)
  {
    userMarker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    hasMarker = true;
  }
  // If there is a marker already, change its location.
  else {
    userMarker.setPosition(latLng);
  }

  // Move to the new marker location.
  map.panTo(latLng);
}

// ===========
// MARKER INFO
// ===========

function openInfo(loc) {
  document.getElementById("myInfo").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";

  var url = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=" + loc.lat + "&lon=" + loc.lng + "&appid=88dc6c1ecc0dd1bde6241ba82cff244f";
  console.log(url);
  // $.getJSON('https://crossorigin.me/http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b1b15e88fa797225412429c1c50c122a1', function(data)
  $.getJSON(url, function(data)
  {
    document.getElementById("temp").innerHTML = "<b>Temperature: </b>" + data.main.temp;
    document.getElementById("speed").innerHTML = "<b>Wind Speed: </b>" + data.wind.speed;
    document.getElementById("degree").innerHTML= "<b>Wind Direction: </b>" + data.wind.deg;
    document.getElementById("cond").innerHTML= "<b>Condition: </b>" + data.weather[0].description;
  });

}

function closeInfo() {
  document.getElementById("myInfo").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}
// ===========
// TEMP MARKER
// ===========


// =========
// DIRECTION
// =========

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
          origin: myPosition,
          destination: fireMarker.getPosition(),
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];
            var summaryPanel = document.getElementById('directions-panel');
            summaryPanel.innerHTML = '';
            // For each route, display summary information.
            for (var i = 0; i < route.legs.length; i++) {
              var routeSegment = i + 1;
              summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
                  '</b><br>';
              summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
              summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
              summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
            }
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
}
