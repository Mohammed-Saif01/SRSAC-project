
$(document).ready(function () {
	$('a[id^="get_menu_id_"]').on('click',function(){
		var id = $(this).attr('id');
		get_menu_id(id);
		});
		});