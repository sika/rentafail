var mHeaderLogin = angular.module('app.directives.mHeaderLogin', [])// mMain-dependent due to factory call
mHeaderLogin.directive('dHeaderLogin', fHeaderLogin);
function fHeaderLogin() {
    return {
        restrict: 'A',
        templateUrl: 'app/directives/header-login/header-login.html',
        controller: function ($scope, mainFactory) {
            //$scope.loggedin = false; 
            $scope.login = mainFactory.getLogin(); //default view; user not logged in
            $scope.iUser = 999;
            //console.log($scope.iUser);
            $scope.username = { name: "" }; 
            $scope.password = { pass: "" };
            $scope.wrongUserOrPass = false; //error message upon wrong username or password match
            $scope.users = mainFactory.getUsers(); //move to function?
            $scope.logins = mainFactory.getLogins();
            //console.log($scope.users);
        },
        link: function (scope, element, attrs) {
            scope.confirm = function () {//checking for username and password match
                for (var i = 0, len = scope.users.length; i < len; i++) {
                    if (scope.users[i].name === scope.username.name)//true if input username match existing user name
                    {
                        for (var j = 0, len = scope.logins.length; j < len; j++) {
                            if (scope.logins[j].ref_id_user === scope.users[i].id_user) {//check password
                                if (scope.logins[j].password === scope.password.pass) { //if passed, user is logged in
                                    //scope.iUser = i;
                                    scope.login.username = scope.users[i].name;
                                    scope.login.ref_id_user = scope.users[i].id_user;
                                    scope.login.loggedin = true;
                                    console.log(scope.login.loggedin);
                                    console.log(scope.login.username);
                                    console.log(scope.login.ref_id_user);
                                    return;
                                }
                            }
                        }
                    }
                }//case no match was found
                scope.wrongUserOrPass = true;
                //alert("username or password incorect"); //case no match
                return;
            }
        }
    }
}