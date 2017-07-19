(function(){
  angular.module('PersonService', [])
    .service('PersonService', PersonService);

  function PersonService($http) {
    var url = 'http://localhost:3000/api/v1/person';
    var methods = {
      GET: 'GET',
      POST: 'POST',
      PUT: 'PUT',
      DELETE: 'DELETE'
    }

    this.register = function(person) {
      var request = {
        url: url,
        method: methods.POST,
        data: person
      }

      return $http(request);
    }

    this.list = function() {
      var request = {
        url: url,
        method: methods.GET
      }

      return $http(request);
    }

    this.listOne = function(id) {
      var request = {
        url: `${url}/${id}`,
        method: methods.GET
      }

      return $http(request);
    }

    this.update = function(id, person) {
      var request = {
        url: `${url}/${id}`,
        method: methods.PUT,
        data: person
      }

      return $http(request);
    }

    this.delete = function(id) {
      var request = {
        url: `${url}/${id}`,
        method: methods.DELETE
      }

      return $http(request);
    }

  }
  PersonService.$inject = ['$http']
})();
