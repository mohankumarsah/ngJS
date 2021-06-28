var app=angular.module("myApp",['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.
    when('/',{
        templateUrl:"templates/main.html",
        controller:"mainController"
    }),
    when('/contacts',{
        templateUrl:"templates/contact.html",
        controller:"contactController"
    }),
    otherwise({
        redirectTo:'/'
    });
}]);

app.controller('mainController',function($scope){
    $scope.message="Hello there!!"
});
app.controller('contactController',function($scope){
    $scope.message="you can contact us at abc@gmail.com!!"
})