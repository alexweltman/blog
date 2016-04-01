'use strict';

angular.module('blogApp')
  .directive('postListing', ['$state', 'navigator', function ($state, navigator) {
    return {
      scope: { post : '='},
      templateUrl: 'components/postListing/postListing.html',
      restrict: 'E',
      link: function ($scope, element, attrs) {
        $scope.navigator = navigator;
      }
    };
  }]);
