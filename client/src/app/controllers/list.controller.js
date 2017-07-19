(function() {
  'use strict';

  angular.module('ListController', ['PersonService'])
    .controller('ListController', ['PersonService', ListController]);

  function ListController(PersonService) {
    var vm = this;

    vm.listOfPersons = [];

    PersonService
      .list()
      .then(function(res) {
        console.log("Response:", res);
        vm.listOfPersons = res.data;
        console.log(vm.listOfPersons);
      })
      .catch(function(err) {
        console.log("Error:", err);
      });
  }
})();
