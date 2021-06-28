var app=angular.module('myModule',[]);

app.controller('formController',function($scope){
    $scope.reset=function(){
        $scope.firstname="";
        $scope.lastname="";
        $scope.email="";
        $scope.password="";
    }
})






