

function open_search(){

$("#hide_bydefault_search").show();
 $("#search").hide();
}

function change_language(lang){
      var siteURL = $('#siteURLvalue').val();
     
$.ajax({
   url: siteURL+"homepage/change_language_session",
   type:"POST",
   data:{lang:lang},
    beforeSend: function (xhr) { // Add this line
            xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
            },
   success: function(result){
  location.reload();
	
	
    }});


}