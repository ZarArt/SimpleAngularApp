(function () {
    //Create a module
    var app = angular.module('MyApp', ['ngRoute']);
    //Create a controller
    app.controller('HomeController', function ($scope) {
        $scope.Message = 'Hello to all!!!';
    });
})();