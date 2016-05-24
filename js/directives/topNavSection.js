app.directive('topNavSection', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/top-nav-section.html',

    link: function(scope) {
      
      scope.openNav  = function () {
        alert("clicked");
		  }
  	}
  };
});