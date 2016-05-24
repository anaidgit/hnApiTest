app.controller('MainController', function ($scope, $http) {
	$scope.greeting     =   'Hello world!';
    $scope.title        =   'Hacker News';
	// When we first load our Controller, we'll call our first web service, which fetchs a list of all Customer records.
    $http.get('http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50')
        .success(function (data) {
            $scope.listOfEntries = data.hits;

            if ($scope.listOfEntries.length > 0) {
                // If we managed to load more than one Customer record, then select the first record by default.
                // This line of code also prevents AngularJS from adding a "blank" <option> record in our drop down list
                // (to cater for the blank value it'd find in the "selectedCustomer" variable) 
                $scope.selectedCustomer = $scope.listOfEntries[0].CustomerID;
               
            }
        })
        .error(function (data, status, headers, config) {
            $scope.errorMessage = "Couldn't load the list of customers, error # " + status;
    });

});
