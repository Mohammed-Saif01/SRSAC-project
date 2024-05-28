           $( document ).ready(function() {
            //Added by Amey S. on 22/10/2021 
  /*$(document).bind("contextmenu",function(e){
      return false;
    });*/
  jQuery(document).ready(function(){
      jQuery("a").click(function(){
        var href = jQuery(this).attr("href");
        
        var domain_name = window.location.hostname; //given by amol sir
        if (domain_name != 'localhost' && domain_name != 'mrsac.gov.in')
        {
          jQuery(this).attr("target","_new");
          return confirm("This is external link. Are you sure you want to continue?");      
        }
      });
      
    }); 
    });

  var vid = document.getElementById("myVideo"); 
//function for to know that video is ended//
  function videoEnded() {
  toggleDiv();
  $(".wrapper").hover(function(){
  $('.pause').hide();
  $('.playpause').show();
  },function(){
  $('.pause').hide();
  });
  }
  //function to stop fading and start video//
  function play_video(){
  vid.play();
  $(".playpause").fadeOut();
  $('.pause').fadeIn();
  $(".wrapper").hover(function(){
  $('.pause').show();
  },function(){
  $('.pause').hide();
  });
  var $els = $('div[id^=quote]'),
  i = 0,
  len = $els.length;
  $els.slice(1).hide();
  $els.eq(i).fadeIn(function () {
  i = (i + 1) % len
  $els.eq(2).stop().fadeIn().FadeOut();
  })
  } 
  //function to pause video and start fading//
  function pause_video(){
  vid.pause(); 
  if (vid.paused) {
  toggleDiv();
  $(".wrapper").hover(function(){
  $('.pause').hide();
  $('.playpause').show();
  },function(){
  $('.pause').hide();
  });
  }
  $(".pause").fadeOut();
  } 
  $('video').one('play', function () {
  $('.playpause').show();
  $(".wrapper").hover(function(){
  $('.pause').show();
  },function(){
  $('.pause').hide();
  });
  });
//function to toggle divs after pause//
  function toggleDiv() {
  setTimeout(function () {
  $("#quote2").hide();
  $("#quote1").show();
  setTimeout(function () {
  $("#quote2").show();
  $("#quote1").hide();
  if(vid.paused){
  toggleDiv();
  }else{
  $("#quote1").show();
  $("#quote2").hide();
  }
  }, 5000);
  }, 5000);
  }
  window.SetVolume = function(val)
{
    var player = document.getElementById('myVideo');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
}