'use strict';

angular.module('blogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit', {
        url: '/edit/:postId',
        templateUrl: 'app/edit/edit.html',
        controller: 'EditCtrl'
      });
  });
