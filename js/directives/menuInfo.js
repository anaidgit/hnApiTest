app.directive('menuInfo', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/menuInfo.html',
    
    link: function(scope, element, attrs) {

      scope.download = function() {
        element.addClass('active')
      }

    }

  };

});