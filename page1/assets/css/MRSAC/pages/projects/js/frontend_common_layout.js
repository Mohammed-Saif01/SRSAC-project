  $( document ).ready(function() {
  	var siteURL = $('#webroot').val();
  });


$(window).on('load','#frontcommonlayoutBody',function() {
    hide_image(); 
});
//<!-- Below script is added on 03-07-2017 by Amol to always enable CSRF token on every form to POST key-->


  $( document ).ready(function() {
    $("#Token_key_id").prop("disabled", false);
    
    
    
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
                    //var containerHeight = $strip.parent().parent().height();  //a.k.a. 'mask' width   
                    var containerHeight = 278;  
                    $strip.height(stripHeight);         
                    //var totalTravel = stripHeight;
                    var totalTravel = 550;
                    var defTiming = totalTravel/settings.travelocity;   // thanks to Scott Waye     
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
    //here created functionality for theme. date:07/03/2018 Mohnish Giripunje
    window.onload = function () {
    
            var current_theme=localStorage.theme;
            if(localStorage.theme=='black'){
            var body = document.querySelector('body');
            body.classList.add('black_theme');
            //$("ul").addClass("test");
            setTimeout(function(){remove_black_theme(); }, 300000);
            
            
            
            }
            else{
            $("ul").removeClass("test");
            var body = document.querySelector('body');
            body.classList.remove('black_theme');
            var menu = document.querySelector('.test');
            menu.classList.remove('.test');
            
            }
    }
    
    
    
    
    $("input").on( 'keyup', function () {
        var result = table.rows().count()
    } );
        

        function show_modal(id){
 
var form_data = jQuery("#video_gallary_form_id").serializeArray();
 form_data.push( {name: "id",value: id});
  $.ajax({
   url: "../galleries/fetch_category",
   type:"POST",
   data:form_data,
   success: function(result){
 
 
        $("#Modal").html(result);
    
        openModal();
        
    }});
  

 }
                    
function openModal() {

  document.getElementById('myModal').style.display = "block";
  $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: true,
        itemWidth: 210,
        itemMargin: -97,
        asNavFor: '#slider'
      });
      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: true,
        sync: "#carousel",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
       initializeCloseBtn();
}

 function initializeCloseBtn() {
     $( document ).ready(function() {
     $('#closeModalcategory').on('click',function(){
            closeModal();
                });  
                });  
 }

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  //location.reload();
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
  function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
    
  slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}  

  