'use strict';

angular.module('blogApp')
  .factory('navigator', ['$state', function ($state) {
    return {
      goToPost : function(postId){
        $state.go("post", {"postId" : postId});
      },
      goToEdit : function(postId){
        $state.go("edit", {"postId" : postId});
      }
    }
  }]);
