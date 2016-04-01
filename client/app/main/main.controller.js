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
}

angular.module('blogApp')
  .controller('MainController', MainController);

})();
