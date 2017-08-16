angular.module('MyApp')
.controller('Part2Controller', function ($scope, ContactService) {
    $scope.Contact = null;
    ContactService.GetlastContact().then(function (d) {
        $scope.Contact = d.data;
    }, function () {
        alert('Failed');
    })
})
.factory('ContactService', function ($http) {
    var fac = {};
    fac.GetlastContact = function () {
        return $http.get('/Data/GetLastContact');
    }
    return fac;
})