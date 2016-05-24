app.directive('headerSection', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/headerSection.html',

    link: function(scope, element, attrs) {
      scope.titleText = "Hacker News"
  	}
  };
});