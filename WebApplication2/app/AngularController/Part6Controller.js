angular.module('MyApp')
.controller('Part6Controller', function ($scope, RegistrationService) {
    $scope.submitText = 'Save';
    $scope.submitted = false;
    $scope.message = '';
    $scope.isFormValid = false;
    $scope.User = {
        Username: '',
        Password: '',
        Fullname: '',
        EmailID: '',
        Gender: ''
    };

    $scope.$watch('f1.$valid', function (newValue) {
        $scope.isFormValid = newValue;
    });
    $scope.Savedata = function (data) {
        if ($scope.submitText == 'Save') {
            $scope.submitted = true;
            $scope.message = '';
        }
        if ($scope.isFormValid) {
            $scope.submitText = 'Please wait...';
            $scope.User = data;
            RegistrationService.SaveFormData($scope.User).then(function (d) {
                alert(d);
                if (d == 'Success') {

                }
                $scope.submitText = 'Save';
            });
        }
        else {
            $scope.message = 'Please fill required fields ';
        }
    }
    function ClearForm() {
        $scope.User = {};
        $scope.f1.$setPristine();
        $scope.submitted = false;
    }
})
.factory('RegistrationService', function ($http, $q) {
    var fac = {};
    fac.SaveFormData = function (data) {
        var defer = $q.defer();
        $http({
            url: '/Data/Register',
            method: 'POST',
            data: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        }).success(function (d) {
            defer.resolve(d);
        }).error(function(e) {
            alert('Error!');
            defer.reject(e);
        });
        return defer.promise;
    }
    return fac;
});