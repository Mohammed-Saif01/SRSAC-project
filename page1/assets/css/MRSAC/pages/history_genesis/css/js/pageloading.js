// For pageloading loader Done by pravin 16-06-2018 

	function onReady(callback) {
	  var intervalId = window.setInterval(function() {
		if (document.getElementsByTagName('body')[0] !== undefined) {
		  window.clearInterval(intervalId);
		  callback.call(this);
		}
	  }, 500);
	}

	function setVisible(selector, visible) {
	  document.querySelector(selector).style.display = visible ? 'block' : 'none';
	}

	onReady(function() {
	  setVisible('.page', true);
	  setVisible('#loading', false);
	});


	window.onload = function () {
	
	//function for automatically fading of two divs date:16/01/2018 Mohnish Giripunje//
  
  $('.pause').hide();
  $('.playpause').show();
  var $els = $('div[id^=quote]'),
  i = 0,
  len = $els.length;
  $els.slice(1).hide();
  setInterval(function () {
  $els.eq(i).fadeOut(function () {
  i = (i + 1) % len;
  $els.eq(i).fadeIn();
  })
  }, 5000)
	jQuery.fn.liScroll = function(settings) {
		settings = jQuery.extend({
			travelocity: 0.03
			}, settings);		
			return this.each(function(){
					var $strip = jQuery(this);
					$strip.addClass("newsticker")
					var stripHeight = 1;
					$strip.find("li").each(function(i){
						stripHeight += jQuery(this, i).outerHeight(true); // thanks to Michael Haszprunar and Fabien Volpi
					});
					var $mask = $strip.wrap("<div class='mask'></div>");
					var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");								
					var containerHeight = $strip.parent().parent().height();	//a.k.a. 'mask' width 	
					$strip.height(stripHeight);			
					var totalTravel = stripHeight;
					var defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye		
					function scrollnews(spazio, tempo){
					$strip.animate({top: '-='+ spazio}, tempo, "linear", function(){$strip.css("top", containerHeight); scrollnews(totalTravel, defTiming);});
					}
					scrollnews(totalTravel, defTiming);				
					$strip.hover(function(){
					jQuery(this).stop();
					},
					function(){
					var offset = jQuery(this).offset();
					var residualSpace = offset.top + stripHeight;
					var residualTime = residualSpace/settings.travelocity;
					scrollnews(residualSpace, residualTime);
					});			
			});	
	};

	$(function(){
		$("ul#ticker01").liScroll();
	});
		

		var current_theme=localStorage.theme;

	    if(localStorage.theme=='black'){
	        var body = document.querySelector('body');
			body.classList.add('black_theme');
			var el = document.querySelector('.blue-bg');
			el.classList.remove('blue-bg');
			el.classList.add('black-bg');
			//$("ul").addClass("test");
			menu.classList.add('directory_search_box_for_menu');
		    setTimeout(function(){remove_black_theme(); }, 300000);
	    }else{
			$("ul").removeClass("test");
			 var body = document.querySelector('body');
			 body.classList.remove('black_theme');
	 
	    }
	
	}
