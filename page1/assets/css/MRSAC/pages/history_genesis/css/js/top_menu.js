$(document).ready(function () {
	$('.get_menu_id').on('click',function(){
		var id = $(this).attr('id');
		get_menu_id(id);
		});

	$(".navbar-nav li").find('a').each(function(){
		var dynamic_menu_home = $('#dynamic_menu_home').attr('value');
		var menu_text = $('#fetched_menu_title').attr('value');
		if(dynamic_menu_home == ""){
		if($(this).text()=='Home' || $(this).text()=='मुखपृष्ठ'){
		$(this).addClass('selected_home_frontend');
		}
		}
	
		if($(this).text()==menu_text){
			$(this).addClass('selected_submenu_frontend');
		}
	
		
		
	});


});