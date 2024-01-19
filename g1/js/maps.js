/*
 * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
 * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
 */
$( document ).on( "pagecreate", "#accueil", function() {
  var defaultLatLng = new google.maps.LatLng(14.7139094, -17.4391156);  // Default to Hollywood, CA when no geolocation support
  if ( navigator.geolocation ) {
      function success(pos) {
          // Location found, show map with these coordinates
          drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      }
      function fail(error) {
          drawMap(defaultLatLng);  // Failed to find location, show default map
      }
      // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
      navigator.geolocation.watchPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
  } else {
      drawMap(defaultLatLng);  // No geolocation support, show default map
  }
  function drawMap(latlng) {
      var myOptions = {
          zoom: 16,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"), myOptions);
      // Add an overlay to the map of current lat/lng
      var marker = new google.maps.Marker({
          position: latlng,
          map: map,
          title: "Greetings!"
      });
  }
});