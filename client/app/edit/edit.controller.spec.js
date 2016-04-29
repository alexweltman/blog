'use strict';

describe('Controller: EditCtrl', function () {

  // load the controller's module
  beforeEach(module('blogApp'));

  var EditCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditCtrl = $controller('EditCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
