
$( document ).ready(function() {
 $("#13px_font").hide();
 $("#16px_font").hide();
 $("#hide_bydefault_search").hide();
 
});
// Add the class 'impaired-view' to the body
function enlargeFont_15px() {

    $("#16px_font").show();
    var body = document.querySelector('body');
    body.classList.add('impaired-view_15px');
	body.classList.remove('impaired-view_14px');
	body.classList.remove('impaired-view_13px');
	$("#15px_font").hide();
	$("#13px_font").hide();
	$("#14px_font").show();
	
	//var span = document.querySelector('span');
    //span.classList.add('impaired-view');
}

// Remove if not longer necceary
function shrinkFont() {
				  var body = document.querySelector('body');
				  body.classList.remove('impaired-view_15px');
				  body.classList.remove('impaired-view_16px');
				  body.classList.remove('impaired-view_13px');
				  body.classList.remove('impaired-view_14px');
				  $("#16px_font").hide();
				  $("#15px_font").show();
				  body.classList.remove('impaired-view_small');
	  
	 }

// Remove if not longer necceary
function shrinkFont_14px() {
				$("#13px_font").show();
				var body = document.querySelector('body');
				body.classList.remove('impaired-view_16px');
				body.classList.add('impaired-view_14px');
				$("#14px_font").hide();
}
// Remove if not longer necceary
function shrinkFont_13px() {
				var body = document.querySelector('body');
				body.classList.remove('impaired-view_16px');
				body.classList.add('impaired-view_13px');
				body.classList.remove('impaired-view_14px');
				body.classList.remove('impaired-view_15px');
				$("#15px_font").show();
				$("#16px_font").hide();
}

function shrinkFont_small_remove() {
//	alert();
    var body = document.querySelector('body');
    body.classList.remove('impaired-view_14px');
   
}
// Add the class 'impaired-view' to the body
function enlargeFont_16px() {

    $("#15px_font").hide();
    var body = document.querySelector('body');
    body.classList.add('impaired-view_16px');
    body.classList.remove('impaired-view_15px');
	body.classList.remove('impaired-view_13px');
	body.classList.remove('impaired-view_small');
	$("#13px_font").hide();
	$("#14px_font").show();
	
	//var span = document.querySelector('span');
    //span.classList.add('impaired-view');
}

// Add the class 'impaired-view' to the body
function add_black_theme() {

				var theme='black';
				localStorage.theme = theme;
				localStorage.login = "true";
				var current_theme = localStorage.theme;
				location.reload();
				
				
}
// Remove if not longer necceary
function remove_black_theme() {
				  var theme='white';
				  localStorage.theme = theme;
				  localStorage.login = "true";
				  location.reload();
				 
	  
	 }
	 
	 
	 
	 
	 