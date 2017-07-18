(function(){
  'use strict';

  angular.module('RegisterController', [])
    .controller('RegisterController', RegisterController);

  function RegisterController() {
    var vm = this;
    var location;

    navigator.geolocation.getCurrentPosition(function(position) {
      var mapid = L.map('map').setView([position.coords.latitude, position.coords.longitude], 6);
      tileLayerMap(mapid);

      var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mapid);

      location = setLocation(position.coords.latitude, position.coords.longitude);
    });

  }

  function tileLayerMap(map) {
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

  function setLocation(lat, lng) {
    return {
      lat: lat,
      lng: lng
    }
  }
})();
