
var app = angular.module('starter', ['ionic'])

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

    .state('app.newspaper', {
        url: '/newspaper',
        views: {
            'loyalist-tab': {
                templateUrl: 'templates/newspaper.html'
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

    .state('app.loyolaguide', {
        url: '/loyolaguide',
        views: {
            'loyolaguide-tab': {
                templateUrl: 'templates/loyolaguide.html'
            }
        }
    })

    .state('app.map', {
        url: '/map',
        views: {
            'loyolaguide-tab': {
                templateUrl: 'templates/map.html'
            }
        }
    })

    .state('app.staffdir', {
        url: '/staffdir',
        views: {
            'loyolaguide-tab': {
                templateUrl: 'templates/staffdir.html'
            }
        }
    })

    .state('app.quote', {
        url: '/quote',
        views: {
            'loyolaguide-tab': {
                templateUrl: 'templates/quote.html'
            }
        }
    })

    .state('app.aboutschool', {
        url: '/aboutschool',
        views: {
            'loyolaguide-tab': {
                templateUrl: 'templates/aboutschool.html'
            }
        }
    })

    .state('app.impfiles', {
        url: '/impfiles',
        views: {
            'loyolaguide-tab': {
                templateUrl: 'templates/impfiles.html'
            }
        }
    })

    .state('app.stopit', {
        url: '/stopit',
        views: {
            'loyolaguide-tab': {
                templateUrl: 'templates/stopit.html'
            }
        }
    })

    .state('app.optionspage', {
        url: '/optionspage',
        views: {
            'optionspage-tab': {
                templateUrl: 'templates/optionspage.html'
            }
        }
    })


    .state('app.profile', {
        url: '/profile',
        views: {
            'optionspage-tab': {
                templateUrl: 'templates/profile.html'
            }
        }
    })

    .state('app.psummary', {
        url: '/psummary',
        views: {
            'optionspage-tab': {
                templateUrl: 'templates/psummary.html'
            }
        }
    })

    .state('app.settings', {
        url: '/settings',
        views: {
            'optionspage-tab': {
                templateUrl: 'templates/settings.html'
            }
        }
    })
    
    .state('app.legal', {
        url: '/legal',
        views: {
            'optionspage-tab': {
                templateUrl: 'templates/legal.html'
            }
        }
    })

    .state('app.appinfo', {
        url: '/appinfo',
        views: {
            'optionspage-tab': {
                templateUrl: 'templates/appinfo.html'
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

    .state('app.calendar', {
        url: '/calendar',
        views: {
            'main-tab': {
                templateUrl: 'templates/calendar.html'
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
    .state('app.morepage', {
        url: '/morepage',
        views: {
            'main-tab': {
                templateUrl: 'templates/morepage.html'
            }
        }
    })

    .state('app.handbook', {
        url: '/handbook',
        views: {
            'main-tab': {
                templateUrl: 'templates/handbook.html'
            }
        }
    })

    $urlRouterProvider.otherwise('/app/main');
});