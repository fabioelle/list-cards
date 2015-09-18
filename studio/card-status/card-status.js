/*
 * angular-cardstatus-directive v0.0.1
 * (c) 2015 Fabio Lo Cascio
 * License: MIT
 */

var scripts = document.getElementsByTagName("script")
var currentScriptPath = scripts[scripts.length-1].src;

    

angular.module('cardstatus-directive', []).
  directive('cardstatus', function () {
    return {
      restrict: 'E',
      require: '^ngModel',
      scope: {
       ngModel: '='/*,
       decimalFilter: '=filter'*/
      },
      /*controller: ['$scope', function ($scope) { 
              $scope.decimalFilter = function(datum) {
                      return Math.round(datum * 100 * 10) / 10;
              };
          }],*/
      templateUrl: currentScriptPath.replace('card-status.js', 'card-status.html'),
      link: function (scope, element, attrs) {
              //console.log(scope.ngModel.trend['average']);
              scope.ngModel.trend['average'] = scope.ngModel.trend['average']*100;
              //console.log(scope.ngModel.trend['l_week']);
              scope.ngModel.trend['l_week'] = Math.round(scope.ngModel.trend['l_week'] * 100 * 10) / 10;
      }
    };
  });
