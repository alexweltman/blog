'use strict';

angular.module('blogApp.edit', ['textAngular'])
  .controller('EditCtrl', function ($scope, $http, $stateParams, navigator) {

    $scope.init = function() {
      $scope.id = $stateParams.postId
      getPost();
    }


    $scope.updatePostAndRefresh = function(post) {
      updatePost(post).then(function(response){
        navigator.goToPost(post._id);
      });
    };

    var getPost = function() {
      $http.get('/api/posts/' + $scope.id).then(response => {
        $scope.post = response.data;
      });
    };

    var updatePost = function(post){
       return $http.put('/api/posts/' + post._id, post).then(response => {
         return response;
       });
    };

    $scope.init();
  });
