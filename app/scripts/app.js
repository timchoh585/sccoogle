'use strict';

/**
 * @ngdoc overview
 * @name sccoogle30App
 * @description
 * # sccoogle30App
 *
 * Main module of the application.
 */
angular.module('sccoogle30App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'FieldSearch'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/details/:itemId', {
                templateUrl: 'views/details.html',
                controller: 'DetailsCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'contactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
  });