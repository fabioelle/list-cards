'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.cards',
  'cardstatus-directive'
]).
config(['$routeProvider', '$httpProvider', function($routeProvider,$httpProvider) {
  $routeProvider.otherwise({redirectTo: '/cards'});
  
  //$httpProvider.defaults.useXDomain = true;
  //$httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  //$httpProvider.defaults.headers.common["Accept"] = "application/json";
  //$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

}])
.factory('listCardData', function ($http) {
        $http.defaults.useXDomain = true;
        return{          
            doCrossDomainGet: function() {
                return $http({
                    url:'http://dashboard-api.herokuapp.com/api/data/trend',
                    //url:'http://localhost:5000/api/data/trend',
                    method: 'GET'
                })
            }        
        }
});