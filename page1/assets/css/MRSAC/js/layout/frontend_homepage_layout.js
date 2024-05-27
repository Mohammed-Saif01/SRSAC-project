  $( document ).ready(function() {
  	var siteURL = $('#siteURLvalue').val();
  });

$(window).on('load','#fronthomelayoutBody',function() {
    hide_image(); 
});


//<!-- Below script is added on 03-07-2017 by Amol to always enable CSRF token on every form to POST key-->

  $( document ).ready(function() {
    $("#Token_key_id").prop("disabled", false);
  });
  //added code for redirecting page with the help of shortcut key Ctrl+H date:11/04/2018 Mohnish
    $(document).on('keydown', function(e) {
  var kc = e.which || e.keyCode;

  if (e.ctrlKey && String.fromCharCode(kc).toUpperCase() == "H") {
 
    e.preventDefault();
    console.log(String.fromCharCode(kc).toUpperCase());
    window.location.href = siteURL+'/home';
  }
});
 
 
 