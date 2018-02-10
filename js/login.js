$(function(){ 

	var href = document.location.href;
	var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);

	if(lastPathSegment != 'index.html') {
 		//alert('login status: ' + localStorage.getItem("isLoggedIn"));
		if(localStorage.getItem("isLoggedIn") == 'false') {
			alert('You are not authorized to view this page.');
			parent.history.back();
			return false;
		}
	
	}

	$("#login").on('keydown', function (e) {

	    if (e.keyCode == 13) {
	        if($(this).val() == 'misterbassman') {
	        	localStorage.setItem("isLoggedIn", true);
	        	alert("Login successful");
	        } else {
	        	alert("Login failed");
	        	localStorage.setItem("isLoggedIn", false);
	        }
	    }	

	});
});