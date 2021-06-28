var app=angular.module('myApp',[]);

app.controller('firstController',function($scope){
    $scope.message="AngularJs Tutorials"
})

app.controller('dataController',function($scope){
    var listEmployee=[
        {firstName:"rani",lastName:"kumari",gender:"female",salary:1200},
        {firstName:"mohan",lastName:"kumar",gender:"male",salary:3000},
        {firstName:"amar",lastName:"verma",gender:"male",salary:4000},
        {firstName:"amit",lastName:"sah",gender:"male",salary:1000},
        {firstName:"anuska",lastName:"anu",gender:"female",salary:300},
        {firstName:"aditya",lastName:"sony",gender:"male",salary:200},
    ]
    $scope.employees=listEmployee;
})



 


