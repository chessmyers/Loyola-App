// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngPDFViewer'])

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


app.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom'); // other values: top

    $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/tabs.html',
          controller: 'MainController'
      })

    .state('app.main', {
        url: '/main',
        views: {
            'main-tab': {
                templateUrl: 'templates/main.html'
            }
        }
    })

    .state('app.loyalist', {
        url: '/loyalist',
        views: {
            'loyalist-tab': {
                templateUrl: 'templates/loyalist.html'
            }
        }
    })

    .state('app.loyolaChat', {
        url: '/loyolaChat',
        views: {
            'loyolaChat-tab': {
                templateUrl: 'templates/loyolaChat.html'
            }
        }
    })

    

    .state('app.gpa', {
        url: '/gpa',
        views: {
            'main-tab': {
                templateUrl: 'templates/gpa.html'
            }
        }
    })

    .state('app.map', {
        url: '/map',
        views: {
            'main-tab': {
                templateUrl: 'templates/map.html'
            }
        }
    })

        .state('app.weather', {
            url: '/weather',
            views: {
                'main-tab': {
                    templateUrl: 'templates/weather.html'
                }
            }
        })

    .state('app.howtogpa', {
        url: '/howtogpa',
        views: {
            'main-tab': {
                templateUrl: 'templates/howtogpa.html'
            }
        }
    })

    .state('app.testing', {
        url: '/testing',
        views: {
            'main-tab': {
                templateUrl: 'templates/testing.html'
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'main-tab': {
                templateUrl: 'templates/profile.html'
            }
        }
    })

    .state('app.settings', {
        url: '/settings',
        views: {
            'main-tab': {
                templateUrl: 'templates/settings.html'
            }
        }
    })

    .state('app.announcements', {
        url: '/announcements',
        views: {
            'main-tab': {
                templateUrl: 'templates/announcements.html'
            }
        }
    })

    .state('app.bells', {
        url: '/bells',
        views: {
            'main-tab': {
                templateUrl: 'templates/bells.html'
            }
        }
    })

    .state('app.qportal', {
        url: '/qportal',
        views: {
            'main-tab': {
                templateUrl: 'templates/qportal.html'
            }
        }
    })

    .state('app.canvas', {
        url: '/canvas',
        views: {
            'main-tab': {
                templateUrl: 'templates/canvas.html'
            }
        }
    })

    .state('app.tasks', {
        url: '/tasks',
        views: {
            'main-tab': {
                templateUrl: 'templates/tasks.html'
            }
        }
    })

    $urlRouterProvider.otherwise('/app/main');
});