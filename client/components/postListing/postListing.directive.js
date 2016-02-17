'use strict';

angular.module('blogApp')
  .directive('postListing', ['$state', function ($state) {
    return {
      scope: { post : '='},
      templateUrl: 'components/postListing/postListing.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.goToPost = function(postId){
          console.log('calling goTopost in link function');
          $state.go("post", {"postId" : postId});
        }
      }
    };
  }]);
