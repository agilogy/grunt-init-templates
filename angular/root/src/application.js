var calendar = angular.module('calendar', ['ui.bootstrap','ui.router']);
//This is not very secure but will do for the example :)
calendar.value('apiKey', '2jdls3j01yfsjygh515y');


calendar.controller('ProductListController', function ($scope, $rootScope) {
	$scope.products = [
		{
			id:1,
			name: "Macbook Air",
			price: "EUR 1.000.00"
		},
		{
			id:2,
			name: "iPad",
			price: "EUR 439.00"			
		}
	];
	$rootScope.status = "ready";
});

calendar.controller('ProductDetailController', function($scope, $rootScope) {
	$scope.product = {
			id:1,
			name: "Macbook Air",
			price: "EUR 1.000.00"
		};
	$rootScope.status = "ready";
});

calendar.config(function($stateProvider, $locationProvider) {
	 $stateProvider
	 	.state('products', {
	 		url: "/",
	 		controller: 'ProductListController',
	     	templateUrl: "productList.html"
	 	})
	    .state('products_detail', {
	    	url: "/products/{id}",
	 		controller: 'ProductDetailController',
	    	templateUrl: "productDetail.html"
	});
	$stateProvider.html5Mode = false;
	$stateProvider.hashPrefix = "!";
	$locationProvider
  .html5Mode(false)
  .hashPrefix('!');
});
