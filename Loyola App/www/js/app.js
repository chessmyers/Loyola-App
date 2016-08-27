// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'This is a test string!';
    $scope.likes = 0;

    $scope.plus = function () {
        $scope.likes += 1;
    };

    $scope.item1 = "Mario";
    $scope.item2 = "Luigi";
    $scope.item3 = "Peach";
    $scope.show = true;

    $scope.gotoSettings = function () {

    };
    
    $scope.val1 = 0;
    $scope.val2 = 0;
    $scope.val3 = 0;
    $scope.val4 = 0;
    $scope.val5 = 0;

    $scope.grade1 = 0;
    $scope.grade2 = 0;
    $scope.grade3 = 0;
    $scope.grade4 = 0;
    $scope.grade5 = 0;
    $scope.grade6 = 0;
    $scope.grade7 = 0;

    $scope.level1 = 0;
    $scope.level2 = 0;
    $scope.level3 = 0;
    $scope.level4 = 0;
    $scope.level5 = 0;
    $scope.level6 = 0;
    $scope.level7 = 0;

    $scope.calculateGPA = function ($scope) {

    };

    $scope.twitter = function () {
        window.open("https://twitter.com/LoyolaHS");
    };

    $scope.instagram = function () {
        window.open("https://www.instagram.com/loyolahigh/");
    };

    $scope.flickr = function () {
        window.open("https://www.google.com");
    };

    $scope.youtube = function () {
        window.open("https://www.youtube.com/channel/UCXwvxAsy5e_Jxi5SGzJ7lpA/undefined");
    };

    $scope.facebook = function () {
        window.open("https://www.facebook.com/pages/Loyola-High-School-Los-Angeles/19920204203");
    };

    $scope.website = function () {
        window.open("http://www.loyolahs.edu/");
    };

}]);

function ContentController($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
}




app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/main.html',
          controller: 'MainController'
      })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html'
            }
        }
    })

    .state('app.gpa', {
        url: '/gpa',
        views: {
            'menuContent': {
                templateUrl: 'templates/gpa.html'
            }
        }
    })

    .state('app.map', {
        url: '/map',
        views: {
            'menuContent': {
                templateUrl: 'templates/map.html'
            }
        }
    })

        .state('app.weather', {
            url: '/weather',
            views: {
                'menuContent': {
                    templateUrl: 'templates/weather.html'
                }
            }
        })

    .state('app.howtogpa', {
        url: '/howtogpa',
        views: {
            'menuContent': {
                templateUrl: 'templates/howtogpa.html'
            }
        }
    })

    .state('app.testing', {
        url: '/testing',
        views: {
            'menuContent': {
                templateUrl: 'templates/testing.html'
            }
        }
    })

    $urlRouterProvider.otherwise('/app/home');
});