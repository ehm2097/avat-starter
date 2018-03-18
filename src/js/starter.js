
var app = angular.module("starterApp", []);

app.controller("starterController", ["$scope", function($scope){
    $scope.maybeDynamic = "This TRULY is dynamic!";
}]);