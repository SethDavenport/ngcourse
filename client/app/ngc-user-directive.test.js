'use strict';

var expect = chai.expect;

describe('ngcUser directive', function() {
  //beforeEach(module('app/ngc-user-directive.html'));
  beforeEach(module('ngcourse-directives'));

  var compile;
  var rootScope;

  beforeEach(inject(function($compile, $rootScope, $templateCache) {
    compile = $compile;
    rootScope = $rootScope;
    console.log($templateCache.info());
  }));

  it('generates the appropriate HTML', function() {
    var scope = rootScope.$new();
    scope.aUser = { name: 'Alice' };

    var element = compile('<ngc-user user="aUser"></ngc-user>')(scope);
    scope.$digest();

  //  expect(element.html()).to.contain('Hello, Alice.');
  });
});
