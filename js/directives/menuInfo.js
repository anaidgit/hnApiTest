app.directive('menuInfo', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/menuInfo.html',
    
    link: function(scope) {
      scope.openNavBar  = function () {
        alert("clicked");        
            
      }
           
    }        
  }

});