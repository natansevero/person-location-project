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

    // Method for delete a person
    vm.delete = function(person) {
      PersonService
        .delete(person._id)
        .then(function(res) {
          console.log(res.data);
          var persons = vm.listOfPersons;

          vm.listOfPersons = persons.filter(function(current){
            return current._id != person._id;
          })
        })
        .catch(function(err){
          console.log(err);
        });
    }

  }
})();
