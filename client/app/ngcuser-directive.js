'use strict';

angular.module('ngcourse-directives', [])
  .directive('ngcUser', function () {
    return {
      restrict: 'E',
      scope: {
        user: '='
      },
      templateUrl: 'app/ngc-user-directive.html'
    };
  });
