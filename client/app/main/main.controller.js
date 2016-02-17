'use strict';

(function() {

class MainController {

  constructor($http, $scope, $state) {
    this.$http = $http;
    this.$scope = $scope;
    this.$state = $state;
    this.$scope.posts = [];

    $http.get('/api/posts').then(response => {
      this.$scope.posts = response.data;
    });
  }

  // goToPost(postId){
  //   this.$state.go("post", {"postId" : postId});
  // }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('blogApp')
  .controller('MainController', MainController);

})();
