function initMap() {
  // Latitude and Longitude
  var myLatLng = { lat: -6.20769, lng: 106.98527 };

  var map = new google.maps.Map(document.getElementById("myMap"), {
    zoom: 17,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "South Jakarta, INA" // Title Location
  });
}
