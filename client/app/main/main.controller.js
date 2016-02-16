'use strict';

(function() {

class MainController {

  addStuff(num1, num2) {
    return this.num1 + this.num2;
  }

  constructor($http, $scope) {
    this.$http = $http;
    this.$scope = $scope;
    this.$scope.posts = [];

    $http.get('/api/posts').then(response => {
      this.$scope.posts = response.data;
    });
  }

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
