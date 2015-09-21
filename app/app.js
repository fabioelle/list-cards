'use strict';

// Declare app level module which depends on views, and components
angular
  .module('myApp', [
    'ngRoute',
    'myApp.cards',
    'cardstatus-directive'
  ]).
  config(['$routeProvider', '$httpProvider', function($routeProvider,$httpProvider) {
    $routeProvider.otherwise({redirectTo: '/cards'});
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
  }])
  .factory('listCardData', function ($http) {
          $http.defaults.useXDomain = true;
          return{          
              doCrossDomainGet: function() {
                  return $http({
                      url:'http://dashboard-api.herokuapp.com/api/data/trend',
                      method: 'GET'
                  })
              }        
          }
  });