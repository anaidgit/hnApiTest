app.controller('MenuController', function ($scope, dataService) {
	$scope.states 				= {};
    $scope.states.activeItem 	= 'New';
	$scope.menu = [ 
	  { 
	    topic: 		'New', 
	    menuUrl: 	'/news', 
	  }, 
	  { 
	    topic: 		'Comments', 
	    menuUrl: 	'/comments', 
	  },
	  { 
	    topic: 		'Show', 
	    menuUrl: 	'/show', 
	  },
	  { 
	    topic: 		'Ask', 
	    menuUrl: 	'/ask', 
	  },
	  { 
	    topic: 		'Jobs', 
	    menuUrl: 	'/jobs', 
	  }
	];

});


