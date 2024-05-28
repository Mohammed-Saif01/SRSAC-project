$(document).ready(function () {
	$('#13px_font').on('click',function(){
shrinkFont_13px();

		});
	$('#14px_font').on('click',function(){
shrinkFont_14px();

		});
	$('#15px_font').on('click',function(){
enlargeFont_15px();

		});
	$('#16px_font').on('click',function(){
enlargeFont_16px();

		});
	$('#remove_black_theme').on('click',function(){
remove_black_theme();

		});$('#add_black_theme').on('click',function(){
add_black_theme();

		});

	$('#change_language0').on('click',function(){
change_language(0);

		});
	$('#change_language1').on('click',function(){
change_language(1);

		});
	$('#open_search').on('click',function(){
open_search(1);

		});

	$('#shrinkfontremove').on('click',function(){
shrinkFont();shrinkFont_small_remove();

		});
	
});