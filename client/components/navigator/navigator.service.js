'use strict';

angular.module('blogApp')
  .factory('navigator', ['$state', function ($state) {
    return {
      goToPost : function(postId){
        console.log('router go to post');
        $state.go("post", {"postId" : postId});
      },
      log : function() {
        console.log('fuck you');
      }
    }
  }]);
