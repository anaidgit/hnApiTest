app.controller("MainController", function($scope, $http) {

    $scope.url            =  'http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=10';
    var hitsN             = 10;
    $scope.loading        = true;
    $scope.listOfEntries  = [];

    $scope.more = function() {

        $scope.url   =  'http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=' + hitsN;

        $http.get($scope.url)
            .success(function(data) {
              if( ! data ) return;
              var items = data.hits;
              
              for (var i = 0; i < items.length; i++) {
               
               $scope.listOfEntries.push(items[i]);
              }
              console.log($scope.listOfEntries);
              hitsN = hitsN+1;

              $scope.loading = false;

            });
    };

  $scope.more();

});

app.directive("whenScrolled", function($window){
  return function(scope, element, attrs) {

      raw = element[0];

      angular.element($window).bind("scroll", function() {
        if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
            alert("scroll");
          scope.loading = true;
        }
        scope.$apply(attrs.whenScrolled);
      });
    }
});
