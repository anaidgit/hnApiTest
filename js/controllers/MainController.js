app.controller("MainController", function($scope, $http) {

  // the array which represents the list
  //$scope.listOfEntries = data.hits;
    $scope.loading = true;
    $scope.list    = [];

  // this function fetches the api and adds it to array
    $scope.more = function() {

        var url =  'http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=5';


        $http.get(url)
            .success(function(data) {
              if( ! data ) return;

               var newItem;
              
              $scope.listOfEntries = [];

              for ( line in data.hits ) {

                newItem = ( data.hits.length + 1 );

                $scope.listOfEntries.push( data.hits[ line ] );

              }

              $scope.loading = false;

            });
    };
  // we call the function twice to populate the list
  $scope.more();
});

// we create a simple directive to modify behavior of <ul>
app.directive("whenScrolled", function() {
  return {

    restrict: 'A',
    link: function(scope, elem, attrs) {

      // we get a list of elements of size 1 and need the first element
      raw = elem[0];

      // we load more elements when scrolled past a limit
      elem.bind("scroll", function() {
        if (raw.scrollTop + raw.offsetHeight + 5 >= raw.scrollHeight) {
          scope.loading = true;

          // we can give any function which loads more elements into the list
          scope.$apply(attrs.whenScrolled);
        }
      });
    }
  }
});