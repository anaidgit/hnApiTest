app.service('dataService', function () {
	var mainUrl 	= "";

	switch (mainUrl) {
		case "/news":
			mainUrl = "http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage="
			break;
		case '/comments':
			mainUrl = ""
			break;
		case '/show':
			mainUrl = ""
			break;
		case '/ask':
			mainUrl = ""
			break;
		case '/jobs':
			mainUrl = ""
			break;
		default:
			mainUrl = "http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage="
	}

    return {
    	saveStringUrl: function(){
			mainUrl = mainUrl;
		},
      
    };
});