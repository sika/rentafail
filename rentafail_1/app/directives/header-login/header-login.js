﻿var mHeaderLogin = angular.module('app.directives.mHeaderLogin', ['mMain'])// mMain-dependent due to factory call
.directive('dHeaderLogin', fHeaderLogin);
function fHeaderLogin() {
    console.log("login");
    return {
        restrict: 'A',
        scope: {}, //isolate scope
        templateUrl: 'app/directives/header-Login/header-Login.html',
        controller: function ($scope, simpleFactory) {
            /* console.log(simpleFactory); */
            $scope.users = simpleFactory.getUsers();
            var bLogin = false;
            $scope.bLogin = bLogin
            console.log($scope.bLogin);
            //console.log($scope.users);
        },
        link: function (scope, element, attrs) {

        }
    }
}
