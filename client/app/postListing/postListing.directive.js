'use strict';

angular.module('blogApp')
  .directive('postListing', ['$state', function ($state) {
    return {
      scope: { post : '='},
      templateUrl: 'app/postListing/postListing.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        scope.goToPost = function(postId){
          console.log('calling goTopost in link function');
          $state.go("post", {"postId" : postId});
        }
      }
    };
  }]);
