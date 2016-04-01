'use strict';

angular.module('blogApp')
  .controller('PostsController', function ($scope, $http, $modal, navigator) {
    $scope.init = function() {
      $scope.navigator = navigator;
      getPosts();
    }

    $scope.openConfirmDeleteModal = function(post) {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: '/components/modals/ConfirmPostDelete/ConfirmPostDelete.html',
        controller: 'ConfirmPostDeleteCtrl',
        size: 'm',
        resolve: {
          postToDelete: function () {
            return post;
          }
        }
    });
      modalInstance.result.then(function (selectedItem) {
         $scope.deletePostAndGetUpdatedList(selectedItem);
      }, function() {
      });
    };


    $scope.deletePostAndGetUpdatedList = function(post) {
      deletePost(post).then(function(response){
        getPosts();
      });
    };

    var getPosts = function() {
      $http.get('/api/posts').then(response => {
        $scope.posts = response.data;
      });
    };

    var deletePost = function(post){
       return $http.delete('/api/posts/' + post._id).then(response => {
         return response;
       });
    };

    $scope.init();
  });
