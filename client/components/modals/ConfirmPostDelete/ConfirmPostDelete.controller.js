'use strict';

angular.module('blogApp')
  .controller('ConfirmPostDeleteCtrl', function ($scope, $modalInstance, postToDelete) {
    $scope.modalInstance = $modalInstance;
    $scope.post = postToDelete;
      $scope.delete = function () {
        $scope.modalInstance.close($scope.post);
      };

      $scope.cancel = function () {
        $scope.modalInstance.dismiss('cancel');
      }
  });
