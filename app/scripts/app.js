'use strict';

/**
 * @ngdoc overview
 * @name policecustodydeathsApp
 * @description
 * # policecustodydeathsApp
 *
 * Main module of the application.
 */
angular
  .module('policecustodydeathsApp', [
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('list');
  //
  // Now set up the states
  $stateProvider
    .state('list', {
      url: '/',
      views: {
        'nav' : {
          templateUrl: 'views/nav.html',
          controller: 'nav'
        },
        'main': {
          templateUrl: 'views/list.html',
          controller: 'list'
        }
      }
    })
    .state('list.view', {
      url: 'view/:id',
      views: {
        'main@' : {
          templateUrl: 'views/view.html',
          controller: 'view'
        }
      }
    });
});
