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


    $scope.calculateGPA = function ($scope) {
        // Grade calculation function, first stores all grade values and course modifiers in disposable variables, 
        // Element id's correspond to function (gs1 = grade select #1)
        // Now just to figure out the grade calculation formula loyola uses      
        var i;
        var grade = new Array();
        var level = new Array();
    
        for (var p = 1; p <= 7; p++)
        {
            p = p.toString();
            i = document.getElementById("gs" + p).valueOf();
            grade[p] = i.options[i.selectedIndex].value;
            i = document.getElementById("ls" + p).valueOf();
            level[p] = i.options[i.selectedIndex].value;
        }   

        for (var j = 1; j <= 7; j++)
        {
            grade[j] = parseFloat(grade[j]);
            level[j] = parseFloat(level[j]);
        }
       
        document.getElementById("test").innerText = (grade[1] + grade[2] + grade[3] + grade[4] + grade[5] + grade[6] + grade[7]) / 7;

    };

    $scope.vis1 = true;
    $scope.vis2 = false;
    $scope.vis3 = false;
    $scope.vis4 = false;
    $scope.vis5 = false;
    $scope.vis6 = false;
    $scope.vis7 = false;

    $scope.changeschedule = function (n) {
      switch (n) {
          case 1:
              $scope.vis1 = true; $scope.vis2 = false; $scope.vis3 = false; $scope.vis4 = false; $scope.vis5 = false; $scope.vis6 = false; $scope.vis7 = false;
              break;
          case 2:
              $scope.vis1 = false; $scope.vis2 = true; $scope.vis3 = false; $scope.vis4 = false; $scope.vis5 = false; $scope.vis6 = false; $scope.vis7 = false;
              break;
          case 3:
              $scope.vis1 = false; $scope.vis2 = false; $scope.vis3 = true; $scope.vis4 = false; $scope.vis5 = false; $scope.vis6 = false; $scope.vis7 = false;
              break;
          case 4:
              $scope.vis1 = false; $scope.vis2 = false; $scope.vis3 = false; $scope.vis4 = true; $scope.vis5 = false; $scope.vis6 = false; $scope.vis7 = false;
              break;
          case 5:
              $scope.vis1 = false; $scope.vis2 = false; $scope.vis3 = false; $scope.vis4 = false; $scope.vis5 = true; $scope.vis6 = false; $scope.vis7 = false;
              break;
          case 6:
              $scope.vis1 = false; $scope.vis2 = false; $scope.vis3 = false; $scope.vis4 = false; $scope.vis5 = false; $scope.vis6 = true; $scope.vis7 = false;
              break;
          case 7:
              $scope.vis1 = false; $scope.vis2 = false; $scope.vis3 = false; $scope.vis4 = false; $scope.vis5 = false; $scope.vis6 = false; $scope.vis7 = true;
              break;
          default:
              $scope.vis1 = true; $scope.vis2 = false; $scope.vis3 = false; $scope.vis4 = false; $scope.vis5 = false; $scope.vis6 = false; $scope.vis7 = false;
           
        };
        
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

    $scope.opencanvas = function () {
        window.open("http://www.bing.com", "_self");
        ref.addEventListener('loadstart', function () { alert(event.url); });
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

    $urlRouterProvider.otherwise('/app/main');
});