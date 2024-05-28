
	  $( document ).ready(function() {
		$('#flipbook_project_sub_category_div').hide();
		var sub_category_xy = $('#sub_category').val();		
		if(sub_category_xy != '' ){ $('#flipbook_project_sub_category_div').show();}
	
	//Find sub category list on ajax call
	$('#parent_category').change(function(){
			
		var parent_category = $('#parent_category').val();
		var user_type = 'front_end';
		var form_data=null;	
		var webroot = $('#webroot').val();
			$.ajax({
					url: webroot+"flipbook/flipbook_sub_category_list",
					type: "POST",
					data: {parent_category:parent_category,user_type:user_type},   
					beforeSend: function (xhr) { // Add this line
            xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
            },            
					success: function(response){
							
						$("#sub_category").html(response);
						var sub_category = $('#sub_category').val();
						
						if(sub_category != null){
							$('#flipbook_project_sub_category_div').show();
							
						}else{
							$('#flipbook_project_sub_category_div').hide();
						}
					}                             
			}); 
		
	});
		
   });     