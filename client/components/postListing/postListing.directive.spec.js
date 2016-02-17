'use strict';

describe('Directive: postListing', function () {

  // load the directive's module and view
  beforeEach(module('blogApp'));
  beforeEach(module('components/postListing/postListing.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<post-listing></post-listing>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the postListing directive');
  }));
});
