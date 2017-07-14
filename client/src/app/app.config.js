(function(){
  'use strict';

  angular.module('PersonLocation')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController',
        controllerAs: 'Register'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListController',
        controllerAs: 'List'
      })
      .otherwise({
        redirectTo: '/register'
      })
  }
  config.$inject = ['$routeProvider'];
})();
