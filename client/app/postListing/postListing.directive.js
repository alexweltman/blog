'use strict';

angular.module('blogApp')
  .directive('postListing', function () {
    return {
      scope: { post : '='},
      templateUrl: 'app/postListing/postListing.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
