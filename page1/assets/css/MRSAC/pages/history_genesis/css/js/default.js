
	function onReady(callback) {
	  var intervalId = window.setInterval(function() {
		if (document.getElementsByTagName('body')[0] !== undefined) {
		  window.clearInterval(intervalId);
		  callback.call(this);
		}
	  }, 1000);
	}

	function setVisible(selector, visible) {
	  document.querySelector(selector).style.display = visible ? 'block' : 'none';
	}

	onReady(function() {
	  setVisible('.page', true);
	  setVisible('#loading', false);
	});


	//here created functionality for theme. date:07/03/2018 Mohnish Giripunje
	window.onload = function () {
	
	        var current_theme=localStorage.theme;
			if(localStorage.theme=='black'){
			var body = document.querySelector('body');
			body.classList.add('black_theme');
		 
			//this is for expiration of theme in minutes. Mohnish Giripunje
			setTimeout(function(){remove_black_theme(); }, 300000);
			}else{
				$("ul").removeClass("test");
			var body = document.querySelector('body');
			body.classList.remove('black_theme');
			}
	}
	 //added code for redirecting page with the help of shortcut key Ctrl+H date:11/04/2018 Mohnish
		$(document).on('keydown', function(e) {
  var kc = e.which || e.keyCode;

  if (e.ctrlKey && String.fromCharCode(kc).toUpperCase() == "H") {
 
    e.preventDefault();
    console.log(String.fromCharCode(kc).toUpperCase());
    window.location.href = '../home';
  }
});