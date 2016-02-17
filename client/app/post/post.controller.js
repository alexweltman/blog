'use strict';

(function() {

class PostController {

  constructor($http, $scope, $stateParams) {
    this.$http = $http;
    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.$scope.posts = [];
    this.$scope.id = this.$stateParams.postId;
    console.log('postID', this.$scope.id);

    $http.get('/api/posts/'+this.$scope.id).then(response => {
      this.$scope.post = response.data;
      console.log(this.$scope.post);
    });
  }
}

angular.module('blogApp')
  .controller('PostCtrl', PostController);

})();
