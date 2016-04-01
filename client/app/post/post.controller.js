'use strict';

(function() {

class PostController {

  constructor($http, $scope, $stateParams) {
    this.$http = $http;
    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.$scope.posts = [];
    this.$scope.id = this.$stateParams.postId;

    $http.get('/api/posts/'+this.$scope.id).then(response => {
      this.$scope.post = response.data;
    });
  }
}

angular.module('blogApp')
  .controller('PostCtrl', PostController);

})();
