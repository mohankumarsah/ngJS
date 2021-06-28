var app=angular.module("myModule",[]);

app.controller("dataController",function($scope,$http){
    var url="data/record.json";
    $http.get(url).then(function(response){
        $scope.employees=response.data.record;
    });
});



var app=angular.module('myApp',[]);
app.controller('dataController',function($scope,$http){
    var url="data/record.json";
    $http.get(url).then(function(response){
        $scope.employees=response.data.record;
    });
});





