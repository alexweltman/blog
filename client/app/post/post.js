'use strict';

angular.module('blogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('post', {
        url: '/post/:postId',
        templateUrl: 'app/post/post.html',
        controller: 'PostCtrl'
      });
  });
