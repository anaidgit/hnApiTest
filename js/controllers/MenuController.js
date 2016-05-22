app.controller('MenuController', function ($scope) {
	$scope.states = {};
    $scope.states.activeItem = 'New';
	$scope.menu = [ 
	  { 
	    topic: 'New', 
	    url: '', 
	  }, 
	  { 
	    topic: 'Comments', 
	    url: '', 
	  },
	  { 
	    topic: 'Show', 
	    url: '', 
	  },
	  { 
	    topic: 'Ask', 
	    url: '', 
	  },
	  { 
	    topic: 'Jobs', 
	    url: '', 
	  }
	];
});


