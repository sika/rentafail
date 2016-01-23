/// <reference path="angular-route.js" />
/// <reference path="angular.js" />


//module with route dependence
var myApp = angular.module('mMain', ['ngRoute', 'ui.router', 'app.directives.mHeaderAnchor',
			'app.directives.mHeaderLogin', 'app.directives.mHeaderChooseType', 'app.directives.mSearchBar']);
/*router declaration*/
myApp.config(fRouteProvider);
/*router function*/
function fRouteProvider($routeProvider) {
	$routeProvider.when('/', {
		controller : 'mainController',
		templateUrl : 'partials/home.html'
	}).when('/beafail', {
		controller : 'mainController',
		templateUrl : 'partials/be_a_fail.html'
	}).when('/register', {
	    controller: 'regController',
	    templateUrl: 'partials/register.html'
	}).otherwise({
		redirectTo : '/'
	});
}

/*controller declaration*/
myApp.controller('mainController', fMainController);
/*controller function*/
function fMainController($scope, mainFactory, $sce) { //mainFactory returns factory object
    $scope.users = mainFactory.getUsers(); //call  factory for customer objects;
    $scope.logins = mainFactory.getLogins(); //call  factory for customer objects;
    $scope.videos = mainFactory.getVideos(); //call  factory for customer objects;
    $scope.rents = mainFactory.getRents(); //call  factory for customer objects;	
	$scope.trustSrc = function (src) {
		return $sce.trustAsResourceUrl(src);
	}
	$scope.login = mainFactory.getLogin();
    //$scope.aVideos = mainFactory.getAVideos();
	//reg();
	//function reg() {

    //}
	

}
myApp.controller('regController', fRegController);
function fRegController($scope, mainFactory) {
    $scope.regInfo = {
        username: "",
        password: "",
        password_confirm: "",
        email: ""
    };
    $scope.register = function () {
        if ($("#form_register").validate())
        alert("register function");
    }
}

/*factory declaration*/
myApp.factory('mainFactory', fMainFactory);
/*Factory function*/
function fMainFactory() {
	/*empty object declaration*/
	var factory = {};
	var users = [{
			id_user : 1,
			name : "bob jew",
			email : "bobjew@hotmail.com",
			ref_id_password : 1,
			ref_id_rent : null,
			ref_id_video : null
		}, {
			id_user : 2,
			name : "aaa",
			email : "aaa@hotmail.com",
			ref_id_password : 3,
			ref_id_rent : null,
			ref_id_video : null
		}, {
			id_user : 3,
			name : "bbb",
			email : "bbb@hotmail.com",
			ref_id_password : 5,
			ref_id_rent : null,
			ref_id_video : null
		}
	];

	var logins = [{
			ref_id_user : 1,
			password : "bobjew"
		}, {
			ref_id_user : 2,
			password : "aaa"
		}
	];

	var videos = [{
			id_video : 1,
			name : "Cheerleading Fail",
			url : "http://www.youtube.com/embed/l-kxBjNML5c?autoplay=0",
			ref_id_user : 1
		}, {
			id_video : 2,
			name : "Bro night fail",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 3,
			name : "Nathan A. Fuller",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 3
		}, {
			id_video : 4,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 5,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 6,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 7,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 8,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 9,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 10,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 11,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 12,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}
	];

	var rents = [{
			id_rent : 1,
			datetime : "2016-01-08 18:30",
			ref_id_user : 1
		}, {
			id_rent : 2,
			datetime : "2016-01-05 15:00",
			ref_id_user : 2
		}
	];

	var login = [{
	    loggedin: false,
	    username: "",
	    userId: 999
	}];

	factory.getUsers = function () {
		return users;
	};
	factory.getVideos = function () {
		return videos;
	};
	factory.getLogins = function () {
		return logins;
	};
	factory.getRents = function () {
		return rents;
	};
	factory.getLogin = function () {
	    return login;
	}

	return factory;
}
