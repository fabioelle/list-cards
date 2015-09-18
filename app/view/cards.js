'use strict';

angular.module('myApp.cards', ['ngRoute'])

.config(['$routeProvider', '$httpProvider', function($routeProvider,$httpProvider) {
  $routeProvider.when('/cards', {
    templateUrl: 'view/cards.html',
    controller: 'CardsCtrl'
  });

  /*$httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";*/

}])

.controller('CardsCtrl', ['$scope','$http', 'listCardData', '$interval', '$timeout', function($scope,$http,listCardData,$interval,$timeout) {

	$scope.cards = [];

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
		listCardData.doCrossDomainGet()
		    .then(function(data){
		        $scope.cards = data.data;
				console.log($scope.cards);
		    },
		    function(err,status){
		        console.log("ko");
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
	
			
	/*$http({ 
		method: 'GET', 
		//url: 'http://dashboard-api.herokuapp.com/api/data/trend'
		url: 'http://localhost:5000/api/data/trend'
	}).success(function(data, status) {
		$scope.cards = data;
		console.log($scope.cards);
		//$scope.loadingComplete = true;
	})
	.error(function(status) {
		console.log("error!");
	});*/

	/*$scope.cards = [
	{"type":"digital yacht","trend":
		{"average":0.8488916370552033,"total":59116,"week":430,"l_week":0.3915955168195069,"l_w_t":"-"}
	},
	{"type":"gofree","trend":
		{"average":0.9108113555703312,"total":15651,"week":871,"l_week":0.8373738545924425,"l_w_t":"-"}
	},
	{"type":"loweance","trend":
		{"average":0.1389970681630075,"total":95658,"week":506,"l_week":0.4597898356150836,"l_w_t":"-"}
	},
	{"type":"b&g","trend":
		{"average":0.305731272790581,"total":69913,"week":237,"l_week":0.9646504414267838,"l_w_t":"+"}
	},
	{"type":"garmin","trend":
		{"average":0.9543411179911345,"total":48886,"week":225,"l_week":0.5387120337691158,"l_w_t":"="}
	},
	{"type":"vexilar","trend":
		{"average":0.9512602735776454,"total":41953,"week":248,"l_week":0.023410960100591183,"l_w_t":"="}
	},
	{"type":"simrad","trend":
		{"average":0.3784458409063518,"total":32926,"week":288,"l_week":0.7096578765194863,"l_w_t":"-"}
	},
	{"type":"raymarine","trend":
		{"average":0.8109972113743424,"total":38179,"week":678,"l_week":0.3466864130459726,"l_w_t":"+"}
	},
	{"type":"humminbird","trend":
		{"average":0.4604432974010706,"total":52840,"week":520,"l_week":0.09950394206680357,"l_w_t":"-"}
	}
	];*/
}]);