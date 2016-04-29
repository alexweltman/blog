'use strict';

angular.module('blogApp', [
  'blogApp.auth',
  'blogApp.admin',
  'blogApp.constants',
  'blogApp.edit',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
