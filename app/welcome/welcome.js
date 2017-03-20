'use strict';


angular.module('webApp.welcome', ['ngRoute','firebase'])

 .config(['$routeProvider' , function($routeProvider){
 	$routeProvider.when('/welcome',{
 		templateUrl: 'welcome/welcome.html',
 		controller: 'WelcomeCtrl'
 	});
 }])

 .controller('WelcomeCtrl' , ['$scope' , 'CommonProp' ,   function($scope, CommonProp){
    $scope.username = CommonProp.getUser();




 	$scope.logout = function(){
 	    CommonProp.logoutUser();
 	}
 }])