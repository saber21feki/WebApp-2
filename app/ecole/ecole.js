'use restrict';


angular.module('webApp.ecole', ['ngRoute'])

 .config(['$routeProvider' , function($routeProvider){
    $routeProvider.when('/ecole', {
         templateUrl: 'ecole/ecole.html',
         controller: 'EcoleCtrl'
        });
 }])

 .controller('EcoleCtrl' , ['$scope','$http', function($scope,$http){
     $http.get('ecole/ecoles.json')
       .then(function(res){
          $scope.ecole = res.data;
        });

 }]);