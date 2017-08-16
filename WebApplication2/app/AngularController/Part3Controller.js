angular.module('MyApp')
.controller('Part3Controller', function ($scope, LoginService) {
    $scope.IsLoginIn = false;
    $scope.Message = '';
    $scope.Submitted = false;
    $scope.IsFormValid = false;

    $scope.LoginData = {
        Username: '',
        Password: ''
    };

    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;
    })

    $scope.Login = function () {
        $scope.Submitted = true;
        if ($scope.IsFormValid) {
            LoginService.GetUser($scope.LoginData).then(function (d) {
                if (d.data.UserName != null) {
                    $scope.IsLoginIn = true;
                    $scope.Message = "Succesfull login. Welcome " + d.data.FullName + "!";
                }
                else {
                    alert('Invalid credentials');
                }
            })
        }
    }
})
.factory('LoginService', function ($http)
{
    var fac = {};
    fac.GetUser = function (d) {
        return $http({
            url:'/Data/UserLogin',
            method:'POST',
            data: JSON.stringify(d),
            headers:{'content-type': 'application/json'}
        })
    }
    return fac;
})