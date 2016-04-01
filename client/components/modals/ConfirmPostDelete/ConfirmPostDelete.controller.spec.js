'use strict';

describe('Controller: ConfirmPostDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('blogApp'));

  var ConfirmPostDeleteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmPostDeleteCtrl = $controller('ConfirmPostDeleteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
