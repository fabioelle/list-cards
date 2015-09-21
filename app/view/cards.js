'use strict';

angular
	.module('myApp.cards', [
		'ngRoute'
		])
	.config(['$routeProvider', '$httpProvider', function($routeProvider,$httpProvider) {
	  $routeProvider.when('/cards', {
	    templateUrl: 'view/cards.html',
	    controller: 'CardsCtrl'
	  });
	}])
	.controller('CardsCtrl', ['$scope','$http', 'listCardData', '$interval', '$timeout', function($scope,$http,listCardData,$interval,$timeout) {

		$scope.cards = [];
		$scope.loadingComplete = false;

		$scope.typeCard = [
			{type:"garmin", classCss:"garmin"},
			{type:"gofree", classCss:"gofree"},
			{type:"b&g", classCss:"beg"},
			{type:"digital yacht", classCss:"digital_yacht"},
			{type:"vexilar", classCss:"vexilar"},
			{type:"simrad", classCss:"simrad"},
			{type:"loweance", classCss:"loweance"},
			{type:"humminbird", classCss:"humminbird"},
			{type:"raymarine", classCss:"raymarine"}
			];

		$scope.updateData = function(){
			$scope.loadingComplete = true;
			listCardData.doCrossDomainGet()
			    .then(function(data){
			        $scope.cards = data.data;
					$scope.loadingComplete = false;
			    },
			    function(err,status){
			        $scope.loadingComplete = false;
			        $scope.msg = "No load data";
		    });
		}

		var c=0;
		$scope.updateData();
		$interval(function(){
			$scope.updateData();
			c++;
		},3000);

		$scope.colorValue=function(myValue){
			var classeCard = '';
			angular.forEach($scope.typeCard, function(value) {
			        if(myValue == value.type){
			        	classeCard = value.classCss;
			        }
			    });
			return classeCard;
		}
	}]);