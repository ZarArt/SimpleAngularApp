angular.module('MyApp')
.controller('Part5Controller', function ($scope, LocationService) {
    
    $scope.CountryID = null;
    $scope.StateID = null;
    $scope.CountryList = null;
    $scope.StateList = null;

    $scope.StateTextToShow = "Select State";
    $scope.Result = "";

    LocationService.GetCountry().then(function (d) {
        $scope.CountryList = d.data;
    }, function () {
        alert('Error!');
    });

    $scope.GetState = function () {
        $scope.StateID = null;
        $scope.StateList = null;
        $scope.StateTextToShow = "Please wait...";

        LocationService.GetStates($scope.CountryID).then(function (d) {
            $scope.StateList = d.data;
            $scope.StateTextToShow = "Select state";
        }, function () {
            alert('Error!');
        });
    }

    $scope.ShowResult = function () {
        $scope.Result = "Selected Country ID : " + $scope.CountryID + " StateID : " + $scope.StateID;
    }
})
.factory('LocationService', function ($http) {
    var fac = {};
    fac.GetCountry = function () {
        return $http.get('/Data/GetCountries')
    }

    fac.GetStates = function (countryID) {
        return $http.get('/Data/GetStates?countryID=' + countryID)
    }
    return fac;
});