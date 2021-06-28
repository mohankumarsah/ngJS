var app=angular.module("myModule",[]);

app.controller('firstController',function($scope){
    $scope.message='AngularJs Tutorials'
})



app.controller('dataController',function($scope){
    var listEmployees=[
        {firstName:"Mohan",lastName:"Kumar",gender:"Male",salary:1200},
        {firstName:"Mony",lastName:"Sharma",gender:"Female",salary:100},
        {firstName:"Raghu",lastName:"Gill",gender:"Male",salary:200},
        {firstName:"Anu",lastName:"Tomar",gender:"Female",salary:1100},
        {firstName:"kapoor",lastName:"Basil",gender:"Male",salary:1500},
    ]
    $scope.employees=listEmployees;
})

 
