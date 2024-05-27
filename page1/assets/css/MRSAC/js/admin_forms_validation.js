
//This function is used for add_user, edit_user & user_profile form validations(admin users)
function add_user_validations(){

	 var f_name=$("#f_name").val();
	 var l_name=$("#l_name").val();
	 var email=$("#email").val();
	 var aadhar_card_no=$("#aadhar_card_no").val();
	 var phone=$("#phone").val();
	 var landline_phone=$("#landline_phone").val();
	 var department=$("#department").val();
	 
	 var value_return = 'true';
	 
  //split path to find controller and action
	var path = window.location.pathname;
	var path = window.location.pathname;
	var paths = path.split("/");
	var controller = paths[2];
	var action = paths[3];
 
	 if(f_name.match(/^[A-z ]{1,100}$/) == null){
		 
		$("#error_f_name").show().text("Please Enter First Name");
		$("#error_f_name").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		$("#f_name").click(function(){$("#error_f_name").hide().text;});
				
		value_return = 'false';
				
	 }
	 
	 if(l_name.match(/^[A-z ]{1,100}$/) == null){
		 
		$("#error_l_name").show().text("Please Enter Last Name");
		$("#error_l_name").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		$("#l_name").click(function(){$("#error_l_name").hide().text;});
				
		value_return = 'false';
				
	 }
	 
	 
	 if(email==""){
		 
		$("#error_email").show().text("Please Enter Email Address");
		$("#error_email").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		$("#email").click(function(){$("#error_email").hide().text;});
				
		value_return = 'false';
				
	 }else{
		 
		 if(email.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)){}else{
			 
			 $("#error_email").show().text("Please Enter Valid Email Address");
			 $("#error_email").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			 $("#email").click(function(){$("#error_email").hide().text;});
				
			 value_return = 'false';
		 }
		 
	 }
	 
	 
	 
	 
	 
	 if(phone==""){
		 
		$("#error_phone").show().text("Should not be blank, Only numbers allowed, max & min length is 10");
		$("#error_phone").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		$("#phone").click(function(){$("#error_phone").hide().text;});
				
		value_return = 'false';
				
	 }else{
		 
		 if(phone.match(/^(?=.*[0-9])[0-9]{10}$/g) || phone.match(/^[X-X]{6}[0-9]{4}$/i)){}else{//also allow if 6 X $ 4 nos found //added on 12-10-2017 by Amol
			 
			 $("#error_phone").show().text("Should not be blank, Only numbers allowed, max & min length is 10");
			 $("#error_phone").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			 $("#phone").click(function(){$("#error_phone").hide().text;});
				
			 value_return = 'false';
		 }
		 
	 }
	 
	 
	 if(landline_phone!=""){
		 
		
		 
		 if(landline_phone.match(/^(?=.*[0-9])[0-9]{6,15}$/g)){}else{
			 
			 $("#error_landline_phone").show().text("Only numbers allowed");
			 $("#error_landline_phone").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			 $("#landline_phone").click(function(){$("#error_landline_phone").hide().text;});
				
			 value_return = 'false';
		 }
		 
	 }
	 

	//this check is only first time add user
	if(action == 'add_user')
	{	 
		if($('#aadhar_auth_check').prop("checked") == false){
					
			$("#error_aadhar_auth_check").show().text("Please check to confirm Aadhar authentication");
			$("#error_aadhar_auth_check").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_aadhar_auth_check").fadeOut();},8000);
			$("#aadhar_auth_check").click(function(){$("#error_aadhar_auth_check").hide().text;});
			value_return = 'false';	
		}
	}
	
	
	 if(department==""){
		 
		$("#error_department").show().text("Select department name");
		$("#error_department").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		$("#department").click(function(){$("#error_department").hide().text;});
				
		value_return = 'false';
				
	 }
	 
	 
	 if(value_return == 'false')
		{
			$('#common_validation_error_modal').modal('show');
			$('body').scrollTop(0);
			return false;
		}
		else{
			exit();
			
		}

}




//This function is used for change password input validations.
function change_password_validations(){
	
	// Empty Field validation
						
		var oldpass=$("#Oldpassword").val();
		var newpass=$("#Newpassword").val();
		var confpass=$("#confpass").val();
		
		var value_return = 'true';
		
		if(oldpass==""){
			
			$("#error_oldpass").show().text("Please enter your old password.");
			$("#error_oldpass").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_email").fadeOut();},8000);
			$("#Oldpassword").click(function(){$("#error_oldpass").hide().text;});
			value_return = 'false';
			}
			
		if(newpass==""){
			
			$("#error_newpass").show().text("Please enter your new password.");
			$("#error_newpass").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_password").fadeOut();},8000);
			$("#Newpassword").click(function(){$("#error_newpass").hide().text;});
			value_return = 'false';
			}
			
		if(confpass==""){
			
			$("#error_confpass").show().text("Please confirm your new password.");
			$("#error_confpass").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_password").fadeOut();},8000);
			$("#confpass").click(function(){$("#error_confpass").hide().text;});
			value_return = 'false';
			}
					
			if(newpass!=''&&confpass!=''){

		if(newpass!=confpass){
		$("#error_confpass").show().text("New Password and Confirm Password do not match!");
		$("#error_confpass").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_email").fadeOut();},8000);
		$("#confpass").click(function(){$("#error_captchacode").hide().text;});
		value_return = 'false';
		}
		}
			
		if(value_return == 'false')
		{
			alert("Please check some fields are missing or not proper.");
			return false;
		}
		else{
			
			//old password encription 
					
			var OldpasswordValue = document.getElementById('Oldpassword').value;
			$.ajax({
								type: "POST",
								url: "../users/read-user-pass-value",
								data:{passwordValidation: OldpasswordValue},
								async:false, 
								beforeSend: function (xhr) { // Added this line
            					xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
            					},
								success: function(data){
									if(data.length>60){
									document.getElementById('Oldpassword').value = data;
									}else{
										return false;
									}
								},
								error:function(){
									return false;
								}

							});

			
			
		//new password encription

			var NewpasswordValue = document.getElementById('Newpassword').value;

			if(NewpasswordValue.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{7,15}$/g))   
			{ 
				
			}
			else{
				alert('Password length should be min 7 char, min. 1 no. and min. 1 Special char.');
				return false;
				
			}
			
			$.ajax({
								type: "POST",
								url: "../users/read-user-pass-value",
								data:{getValidPass: NewpasswordValue},
								async:false, 
								beforeSend: function (xhr) { // Added this line
            					xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
            					},
								success: function(data){
									if(data.length>60){
									document.getElementById('Newpassword').value = data;
									}else{
										return false;
									}
								},
								error:function(){
									return false;
								}

							});
		
			

		//Confirm password encription

			var ConfpassValue = document.getElementById('confpass').value;
			$.ajax({
								type: "POST",
								url: "../users/read-user-pass-value",
								data:{getValidPass: ConfpassValue},
								async:false, 
								beforeSend: function (xhr) { // Added this line
            					xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
            					},
								success: function(data){
									if(data.length>60){
									document.getElementById('confpass').value = data;
									}else{
										return false;
									}
								},
								error:function(){
									return false;
								}

							});
			
			exit();
			
		}
	
	
}









//File validation common function
//This function is called on file upload browse button to validate selected file
function file_browse_onclick(field_id){
	
	var selected_file = $('#'.concat(field_id)).val();
	var ext_type_array = ["jpg" , "pdf", "png"];
	
	var get_file_size = $('#'.concat(field_id))[0].files[0].size;
	var get_file_ext = selected_file.split(".");
	
	var value_return = 'true';
	
	get_file_ext = get_file_ext[get_file_ext.length-1].toLowerCase();
	
	if(get_file_size > 2097152)
	{
		
		$("#error_size_".concat(field_id)).show().text("Please select file below 2mb");
		$("#error_size_".concat(field_id)).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_size_".concat(field_id)).fadeOut();},8000);
		$("#".concat(field_id)).click(function(){$("#error_size_".concat(field_id)).hide().text;});
		$('#'.concat(field_id)).val('')
		
		value_return = 'false';

	}
	
	
	if (ext_type_array.lastIndexOf(get_file_ext) == -1){
		
        
		$("#error_type_".concat(field_id)).show().text("Please select file of jpg, pdf, png type only");
		$("#error_type_".concat(field_id)).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_type_".concat(field_id)).fadeOut();},8000);
		$("#".concat(field_id)).click(function(){$("#error_type_".concat(field_id)).hide().text;});
		$('#'.concat(field_id)).val('');
		
		value_return = 'false';
       
    }
	
	if(value_return == 'false')
		{
			return false;
		}
		else{
			//exit();		
			return true;
		}
	
}



//File validation common function
//This function is called on file upload browse button to validate selected file
function file_browse_onclick_for_pdf(field_id){
	
	var selected_file = $('#'.concat(field_id)).val();
	var ext_type_array = ["pdf"];
	
	var get_file_size = $('#'.concat(field_id))[0].files[0].size;
	var get_file_ext = selected_file.split(".");
	
	var value_return = 'true';
	
	get_file_ext = get_file_ext[get_file_ext.length-1].toLowerCase();
	
	if(get_file_size > 2097152)
	{
		
		$("#error_size_".concat(field_id)).show().text("Please select file below 2mb");
		$("#error_size_".concat(field_id)).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_size_".concat(field_id)).fadeOut();},8000);
		$("#".concat(field_id)).click(function(){$("#error_size_".concat(field_id)).hide().text;});
		$('#'.concat(field_id)).val('')
		
		value_return = 'false';

	}
	
	
	if (ext_type_array.lastIndexOf(get_file_ext) == -1){
		
        
		$("#error_type_".concat(field_id)).show().text("Please select file of pdf type only");
		$("#error_type_".concat(field_id)).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_type_".concat(field_id)).fadeOut();},8000);
		$("#".concat(field_id)).click(function(){$("#error_type_".concat(field_id)).hide().text;});
		$('#'.concat(field_id)).val('');
		
		value_return = 'false';
       
    }
	
	if(value_return == 'false')
		{
			return false;
		}
		else{
			//exit();	
		return true;
		}
	
}



//this function is used for add page, edit page validations
function add_edit_pages_validation(){
	
	var english_title = $('#english_title').val();
	var image_upload_xx=$('#image_upload_xx').val();
	
	//For ckeditor validation
	var english_content = CKEDITOR.instances['english_content'].getData().replace(/<[^>]*>/gi, '').length;	
	alert(english_content);
	var marathi_title = $('#marathi_title').val();
	
	//For ckeditor validation
	var marathi_content = CKEDITOR.instances['marathi_content'].getData().replace(/<[^>]*>/gi, '').length;	
	var page_status = $('#status').val();
	
	var value_return = 'true';
	
	if(english_title == ''){
		
		$("#error_english_title").show().text("Please enter english title");
		$("#error_english_title").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		$("#english_title").click(function(){$("#error_english_title").hide().text;});
		value_return = 'false';
		
	}
	if(image_upload_xx == ''){
		//$("#image_upload_xx").val('/writereaddata/MRSAC/files/default/default_image.jpg');
		//$("#error_image").show().text("Please select cover image.");
		//$("#error_image").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//$("#error_image").click(function(){$("#error_image").hide().text;});
		//value_return = 'false';
		
	}
	if(!english_content){
		
		$("#error_english_content").show().text("Please enter english content");
		$("#error_english_content").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		setTimeout(function(){ $("#error_english_content").fadeOut();},20000);
		//$("#cke_1_contents").on(function(){$("#error_english_content").hide().text;});
		value_return = 'false';
		
	}
	
	if(marathi_title == ''){
		
		$("#error_marathi_title").show().text("Please enter marathi title");
		$("#error_marathi_title").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		$("#marathi_title").click(function(){$("#error_marathi_title").hide().text;});
		value_return = 'false';
		
	}
	if(!marathi_content){
		
		$("#error_marathi_content").show().text("Please enter marathi content");
		$("#error_marathi_content").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		setTimeout(function(){ $("#error_marathi_content").fadeOut();},20000);
		//$("#cke_2_contents").on(function(){$("#error_marathi_content").hide().text;});
		value_return = 'false';
		
	}
	
	/*if(page_status == 4){
	
			if(side_status_panel_validation() == false){
				value_return = 'false';
			};
	
	}else{
	
			if(side_status_panel_validation() == false){
				value_return = 'false';
			};
	}*/

	if(value_return == 'false')
	{
		side_status_panel_validation();
		$('#common_validation_error_modal').modal('show');
		$('body').scrollTop(0);
		return false;
	}
	else{
		
		if(side_status_panel_validation() == false){
				$('#common_validation_error_modal').modal('show');
				$('body').scrollTop(0);
				return false;
			
			}else{
				//exit();
				return true;
			}
		//		
	}
	
	
	
} 


//this function is used for add news, edit news validations, done by pravin bhakare, 06-12-2019
function add_edit_news_validation(){
	
	$('#confirm_send_email_message_model').modal('hide');
	
	var english_title = $('#english_title').val();
	var image_upload_xx=$('#image_upload_xx').val();
	
	//For ckeditor validation
	var english_content = CKEDITOR.instances['english_content'].getData().replace(/<[^>]*>/gi, '').length;	
	
	var marathi_title = $('#marathi_title').val();
	
	//For ckeditor validation
	var marathi_content = CKEDITOR.instances['marathi_content'].getData().replace(/<[^>]*>/gi, '').length;	
	var page_status = $('#status').val();
	
	var value_return = 'true';
	
	if(english_title == ''){
		
		$("#error_english_title").show().text("Please enter english title");
		$("#error_english_title").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		$("#english_title").click(function(){$("#error_english_title").hide().text;});
		value_return = 'false';
		
	}
	
	if(!english_content){
		
		$("#error_english_content").show().text("Please enter english content");
		$("#error_english_content").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		setTimeout(function(){ $("#error_english_content").fadeOut();},20000);		
		value_return = 'false';
		
	}
	
	if(marathi_title == ''){
		
		$("#error_marathi_title").show().text("Please enter marathi title");
		$("#error_marathi_title").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		$("#marathi_title").click(function(){$("#error_marathi_title").hide().text;});
		value_return = 'false';
		
	}
	if(!marathi_content){
		
		$("#error_marathi_content").show().text("Please enter marathi content");
		$("#error_marathi_content").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		setTimeout(function(){ $("#error_marathi_content").fadeOut();},20000);		
		value_return = 'false';
		
	}	
	

	if(value_return == 'false')
	{
		side_status_panel_validation();
		$('#common_validation_error_modal').modal('show');
		$('body').scrollTop(0);
		return false;
	}
	else{
		
		if(side_status_panel_validation() == false){
			$('#common_validation_error_modal').modal('show');
			$('body').scrollTop(0);
			return false;
		}else{
			//exit();
			return true;
		}
				
	}
	
	
	
} 








//this function is used for add menu, edit menu validations
function add_edit_menus_validation(){
		
	var menu_title = $('#menu_title').val();
	var menu_title_mar = $('#menu_title_mar').val();
	var menu_link_type = $('#menu_link_type').val();			
	var external_link = $('#external_link').val();
	var page_id = $('#page_id').val();
	var position = $('#position').val();
	var order = $('#order').val();
	var external_link_status = $('#external_link_status').val();
	var parent = $('#parent').val();
	
	var value_return = 'true';

	

	if(menu_title == ''){
		
		$("#error_menu_title").show().text("Please enter menu name english");
		$("#error_menu_title").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_menu_title").fadeOut();},8000);
		$("#menu_title").click(function(){$("#error_menu_title").hide().text;});
		value_return = 'false';
		
	}
		if(menu_title_mar == ''){
		
		$("#error_menu_title_mar").show().text("Please enter menu name in marathi");
		$("#error_menu_title_mar").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_menu_title").fadeOut();},8000);
		$("#menu_title_mar").click(function(){$("#error_menu_title_mar").hide().text;});
		value_return = 'false';
		
	}
	if(order == ''){
		
		$("#error_order").show().text("Please enter menu order no");
		$("#error_order").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_order").fadeOut();},8000);
		$("#order").click(function(){$("#error_order").hide().text;});
		value_return = 'false';
		
	}
	
	if(!$('#menu_link_type-page').is(":checked") && !$('#menu_link_type-external').is(":checked") && !$('#menu_link_typeStatic').is(":checked")){
				
		$("#error_menu_link_type").show().text("Please check Menu Link type");
		$("#error_menu_link_type").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_menu_link_type").fadeOut();},8000);
		$("#menu_link_type-page").click(function(){$("#error_menu_link_type").hide().text;});
		
		value_return = 'false';
	}
	else{
		
		if($('#menu_link_type-external').is(":checked"))
		{
			if(external_link == ''){
		
				$("#error_external_link").show().text("Please enter external link");
				$("#error_external_link").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
				//setTimeout(function(){ $("#error_external_link").fadeOut();},8000);
				$("#external_link").click(function(){$("#error_external_link").hide().text;});
				value_return = 'false';
				
			}
			
			if(!$('#external_link_status-show').is(":checked") && !$('#external_link_status-hide').is(":checked")){

				$("#error_external_link_status").show().text("Please check Status");
				$("#error_external_link_status").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
				//setTimeout(function(){ $("#error_external_link_status").fadeOut();},8000);
				$("#external_link_status-show").click(function(){$("#error_external_link_status").hide().text;});
				value_return = 'false';
				
			}
		}else{
			
			if(page_id == ''){
		
				$("#error_page_id").show().text("Please select page from list");
				$("#error_page_id").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
				//setTimeout(function(){ $("#error_page_id").fadeOut();},8000);
				$("#page_id").click(function(){$("#error_page_id").hide().text;});
				value_return = 'false';
				
			}			
			
		}
		
	}
	
	
	
	if(!$('#position-top').is(":checked") && !$('#position-side').is(":checked") && !$('#position-bottom').is(":checked")){
				
		$("#error_position").show().text("Please check menu position");
		$("#error_position").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_position").fadeOut();},8000);
		$("#position-top").click(function(){$("#error_position").hide().text;});
		
		value_return = 'false';
	}
	
	if(!$('#menu_type-parent').is(":checked") && !$('#menu_type-sub').is(":checked")){
				
		$("#error_menu_type").show().text("Please check menu type");
		$("#error_menu_type").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_menu_type").fadeOut();},8000);
		$("#menu_type-parent").click(function(){$("#error_menu_type").hide().text;});
		
		value_return = 'false';
	}else{
	
		if($('#menu_type-sub').is(":checked"))
		{
			if(parent == ''){
		
				$("#error_parent").show().text("Please select parent menu for sub menu");
				$("#error_parent").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
				//setTimeout(function(){ $("#error_parent").fadeOut();},8000);
				$("#parent").click(function(){$("#error_parent").hide().text;});
				value_return = 'false';
				
			}
			
		}
		
	}
	

	
		
	
	if(value_return == 'false')
	{
		$('#common_validation_error_modal').modal('show');
		$('body').scrollTop(0);
		return false;
	}
	else{
		return true;
		//exit();			
	}

	
}









//This function is used for Reset password input validations.
function reset_password_validations(){
	
	var newpass=$("#Newpassword").val();
	var confpass=$("#confpass").val();
	var captchacode=$("#captchacode").val();

	var value_return = 'true';

		
	if(newpass==""){
		
		$("#error_newpass").show().text("Please enter your new password.");
		$("#error_newpass").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_password").fadeOut();},8000);
		$("#Newpassword").click(function(){$("#error_newpass").hide().text;});
		value_return = 'false';
		}
		
	if(confpass==""){
		
		$("#error_confpass").show().text("Please confirm your new password.");
		$("#error_confpass").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_password").fadeOut();},8000);
		$("#confpass").click(function(){$("#error_confpass").hide().text;});
		value_return = 'false';
		}
		
	if(captchacode==""){
		
		$("#error_captchacode").show().text("Please enter your verification code.");
		$("#error_captchacode").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_email").fadeOut();},8000);
		$("#captchacode").click(function(){$("#error_captchacode").hide().text;});
		value_return = 'false';
		}

		if(newpass!=''&&confpass!=''){

		if(newpass!=confpass){
		$("#error_confpass").show().text("New Password and Confirm Password do not match!");
		$("#error_confpass").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_email").fadeOut();},8000);
		$("#confpass").click(function(){$("#error_captchacode").hide().text;});
		value_return = 'false';
		}
		}
	
			
			
		if(value_return == 'false')
		{
			alert("Please check some fields are missing or not proper.");
			return false;
		}
		else{
			
			//new password encription

			var NewpasswordValue = document.getElementById('Newpassword').value;
			
			if(NewpasswordValue.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{7,15}$/g))   
			{ 
				 
			}
			else{
				alert('Password length should be min 7 char, min. 1 no. and min. 1 Special char.');
				return false;
				
			}
			
			
			var SaltValue = document.getElementById('hiddenSaltvalue').value;
			var NewpassEncryptpass = calcMD5(NewpasswordValue);
			
			var NewpassSaltedpass = SaltValue.concat(NewpassEncryptpass);

			document.getElementById('Newpassword').value = NewpassSaltedpass;
			
			

	//Confirm password encription

			var ConfpassValue = document.getElementById('confpass').value;
			var ConfpassEncrypt = calcMD5(ConfpassValue);

			var ConfpassSalted = SaltValue.concat(ConfpassEncrypt);
			
			document.getElementById('confpass').value = ConfpassSalted;
			
			return true;
				//exit();
			
		}
	
	
}






//to validate add/edit tender form data
function add_edit_tender_validation(){
	
	
	//split path to find controller and action
	var path = window.location.pathname;
	var paths = path.split("/");
	var controller = path[2];
	var action = paths[3];
	
	
	var awarded_to = $('#awarded_to').val();
	var awarded_amount=$('#awarded_amount').val();
	
	
	var reference_no = $('#reference_no').val();
	var english_title = $('#english_title').val();	
	//var english_content = $('#english_content').val();
	
	var marathi_title = $('#marathi_title').val();
	//var marathi_content = $('#marathi_content').val();	
	
	
	var contact_person = $('#contact_person').val();
	
	var tender_fee = $('#tender_fee').val();
	
	var emd_fee = $('#emd_fee').val();
	var selected_tender = $('#selected_tender').val();
	
	var value_return = 'true';

	if(awarded_to == ''){
		
		$("#error_awarded_to").show().text("Please enter awarded to.");
		$("#error_awarded_to").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_reference_no").fadeOut();},8000);
		$("#awarded_to").click(function(){$("#error_awarded_to").hide().text;});
		value_return = 'false';
		
	}
	
	if(awarded_amount == ''){
	
	$("#error_awarded_amount").show().text("Please enter awarded amount.");
	$("#error_awarded_amount").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
	//setTimeout(function(){ $("#error_reference_no").fadeOut();},8000);
	$("#awarded_amount").click(function(){$("#error_awarded_amount").hide().text;});
	value_return = 'false';
	
	}
	
	if(reference_no == ''){
		
		$("#error_reference_no").show().text("Please enter reference no.");
		$("#error_reference_no").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_reference_no").fadeOut();},8000);
		$("#reference_no").click(function(){$("#error_reference_no").hide().text;});
		value_return = 'false';
		
	}
	if(english_title == ''){
		
		$("#error_english_title").show().text("Please enter page title in English");
		$("#error_english_title").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_english_title").fadeOut();},8000);
		$("#english_title").click(function(){$("#error_english_title").hide().text;});
		value_return = 'false';
		
	}
	if(marathi_title == ''){
		
		$("#error_marathi_title").show().text("Please enter page title in Marathi");
		$("#error_marathi_title").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_marathi_title").fadeOut();},8000);
		$("#marathi_title").click(function(){$("#error_marathi_title").hide().text;});
		value_return = 'false';
		
	}
	
	
	
	if(contact_person == ''){
		
		$("#error_contact_person").show().text("Please Select Access");
		$("#error_contact_person").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_contact_person").fadeOut();},8000);
		$("#contact_person").click(function(){$("#error_contact_person").hide().text;});
		value_return = 'false';
		
	}
	
	if(tender_fee == ''){
		
		$("#error_tender_fee").show().text("Please enter tender fee");
		$("#error_tender_fee").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_tender_fee").fadeOut();},8000);
		$("#tender_fee").click(function(){$("#error_tender_fee").hide().text;});
		value_return = 'false';
		
	}
	if(emd_fee == ''){
		
		$("#error_emd_fee").show().text("Please enter page meta description");
		$("#error_emd_fee").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_emd_fee").fadeOut();},8000);
		$("#emd_fee").click(function(){$("#error_emd_fee").hide().text;});
		value_return = 'false';
		
	}
	if(selected_tender == ''){
		
		$("#error_selected_tender").show().text("Please Select Tender");
		$("#error_selected_tender").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"left"});
		//setTimeout(function(){ $("#error_selected_tender").fadeOut();},8000);
		$("#selected_tender").click(function(){$("#error_selected_tender").hide().text;});
		value_return = 'false';
		
	}
	
	
	if(action == 'add_tender' || action == 'edit_tender' || action == 'add_corrigendum' || action=="edit_corrigendum"){
		
		var english_content = CKEDITOR.instances['english_content'].getData().replace(/<[^>]*>/gi, '').length;
		var marathi_content = CKEDITOR.instances['marathi_content'].getData().replace(/<[^>]*>/gi, '').length;	
		
		if(!(english_content)){
		
		$("#error_english_content").show().text("Please enter page content in English");
		$("#error_english_content").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_english_content").fadeOut();},8000);
		$("#english_content").click(function(){$("#error_english_content").hide().text;});
		value_return = 'false';
		
		}
		if(!(marathi_content)){
			
			$("#error_marathi_content").show().text("Please enter page content in Marathi");
			$("#error_marathi_content").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_marathi_content").fadeOut();},8000);
			$("#marathi_content").click(function(){$("#error_marathi_content").hide().text;});
			value_return = 'false';
			
		}
	
	
	}	
	
	//call function to validate common side status panel

	/*if(side_status_panel_validation() == false){
				value_return = 'false';
			};
	
	if(value_return == 'false')
	{
		return false;
	}
	else{
		exit();			
	}*/
	//alert(value_return);die();
	if(value_return == 'false')
	{
		side_status_panel_validation();
		$('#common_validation_error_modal').modal('show');
		$('body').scrollTop(0);
		return false;
	}
	else{
		
		if(side_status_panel_validation() == false){
				$('#common_validation_error_modal').modal('show');
				$('body').scrollTop(0);
				return false;
			
			}else{
				exit();	
			}
		//		
	}
	
}








//to validate add/edit tender contacts
function add_tender_contact(){
	
	var f_name = $('#f_name').val();
	var m_name = $('#m_name').val();
	var l_name = $('#l_name').val();
	var email_id = $('#email_id').val();
	var mobile = $('#mobile').val();
	var phone = $('#phone').val();
	var designation = $('#designation').val();
	
	var value_return = 'true';
	
	
	if(f_name == ''){
		
		$("#error_f_name").show().text("Please enter First Name.");
		$("#error_f_name").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_f_name").fadeOut();},8000);
		$("#f_name").click(function(){$("#error_f_name").hide().text;});
		value_return = 'false';
		
	}
	if(m_name == ''){
		
		$("#error_m_name").show().text("Please enter Middle Name");
		$("#error_m_name").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_m_name").fadeOut();},8000);
		$("#m_name").click(function(){$("#error_m_name").hide().text;});
		value_return = 'false';
		
	}
	if(l_name == ''){
		
		$("#error_l_name").show().text("Please enter Last Name");
		$("#error_l_name").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_l_name").fadeOut();},8000);
		$("#l_name").click(function(){$("#error_l_name").hide().text;});
		value_return = 'false';
		
	}
	if(email_id == ''){
		
		$("#error_email_id").show().text("Please enter Email Id");
		$("#error_email_id").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_email_id").fadeOut();},8000);
		$("#email_id").click(function(){$("#error_email_id").hide().text;});
		value_return = 'false';
		
	}else{
		 
		 if(email_id.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)){}else{
			 
			 $("#error_email_id").show().text("Please Enter Valid Email Address");
			 $("#error_email_id").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			 $("#email_id").click(function(){$("#error_email_id").hide().text;});
				
			 value_return = 'false';
		 }
		 
	 }
	 
	if(mobile == ''){
		
		$("#error_mobile").show().text("Please enter Mobile No.");
		$("#error_mobile").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_mobile").fadeOut();},8000);
		$("#mobile").click(function(){$("#error_mobile").hide().text;});
		value_return = 'false';
		
	}else{
		 
		 if(mobile.match(/^(?=.*[0-9])[0-9]{10}$/g)){}else{
			 
			 $("#error_mobile").show().text("Enter valid Mobile no. Only 10 digits allowed.");
			 $("#error_mobile").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			 $("#mobile").click(function(){$("#error_mobile").hide().text;});
				
			 value_return = 'false';
		 }
		 
	 }
	 
	if(phone == ''){
		
		$("#error_phone").show().text("Please enter Phone No.");
		$("#error_phone").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_phone").fadeOut();},8000);
		$("#phone").click(function(){$("#error_phone").hide().text;});
		value_return = 'false';
		
	}else{
		 
		 if(phone.match(/^(?=.*[0-9])[0-9]{6,12}$/g)){}else{
			 
			 $("#error_phone").show().text("Only numbers allowed, max length is 12");
			 $("#error_phone").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			 $("#phone").click(function(){$("#error_phone").hide().text;});
				
			 value_return = 'false';
		 }
		 
	 }
	 
	if(designation == ''){
		
		$("#error_designation").show().text("Please enter Designation");
		$("#error_designation").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_designation").fadeOut();},8000);
		$("#designation").click(function(){$("#error_designation").hide().text;});
		value_return = 'false';
		
	}
	
	if(value_return == 'false')
	{
		$('#common_validation_error_modal').modal('show');
		$('body').scrollTop(0);
		return false;
	}
	else{
		return true;
		//exit();			
	}
	
	
}
	
	
	
	
//to validate Employee profile form data
function employee_profile_validation(){
	
	var f_name = $('#f_name').val();
	var l_name = $('#l_name').val();
	var email_id = $('#email_id').val();
	var mobile = $('#mobile').val();
	var photo = $('#photo').val();
	
	var department = $('#department').val();
	var designation = $('#designation').val();
	var date_of_birth = $('#date_of_birth').val();
	var m_anniversary = $('#m_anniversary').val();
	var date_of_joining = $('#date_of_joining').val();
	var date_of_retirement = $('#date_of_retirement').val();
	var place_of_posting = $('#place_of_posting').val();
	var street_address = $('#street_address').val();
	var district = $('#district').val();
	var pin_code = $('#pin_code').val();
	var street_address_per = $('#street_address_per').val();
	var district_per = $('#district_per').val();
	var pin_code_per = $('#pin_code_per').val();
	var value_return = 'true';
	
	
	 if(f_name.match(/^[A-z ]{1,100}$/) == null){
		 
		
		$("#error_f_name").show().text("Please enter First Name");
		$("#error_f_name").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_f_name").fadeOut();},8000);
		$("#f_name").click(function(){$("#error_f_name").hide().text;});
		value_return = 'false';
		
	}	
	 if(l_name.match(/^[A-z ]{1,100}$/) == null){
		
		$("#error_l_name").show().text("Please enter Last Name");
		$("#error_l_name").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_l_name").fadeOut();},8000);
		$("#l_name").click(function(){$("#error_l_name").hide().text;});
		value_return = 'false';
		
	}
	if(email_id == ''){
		
		$("#error_email_id").show().text("Please enter Email Id");
		$("#error_email_id").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_email_id").fadeOut();},8000);
		$("#email_id").click(function(){$("#error_email_id").hide().text;});
		value_return = 'false';
		
	}else{
		 
		 if(email_id.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)){}else{
			 
			 $("#error_email_id").show().text("Please Enter Valid Email Address");
			 $("#error_email_id").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			 $("#email_id").click(function(){$("#error_email_id").hide().text;});
				
			 value_return = 'false';
		 }
		 
	 }
	 
	if(mobile == ''){
		
		$("#error_mobile").show().text("Please enter Mobile No.");
		$("#error_mobile").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_mobile").fadeOut();},8000);
		$("#mobile").click(function(){$("#error_mobile").hide().text;});
		value_return = 'false';
		
	}else{
		 
		 if(mobile.match(/^(?=.*[0-9])[0-9]{10}$/g)){}else{//also allow if 6 X $ 4 nos found //added on 12-10-2017 by Amol
			 
			 $("#error_mobile").show().text("Should not be blank, Only numbers allowed, max & min length is 10");
			 $("#error_mobile").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			 $("#mobile").click(function(){$("#error_mobile").hide().text;});
				
			 value_return = 'false';
		 }
		 
	 }
	 
	
	if(department == ''){
		
		//$("#error_department").show().text("Please Select Department");
		//$("#error_department").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_department").fadeOut();},8000);
		//$("#department").click(function(){$("#error_department").hide().text;});
		value_return = 'true';
		
	}
	if(designation == ''){
		
		$("#error_designation").show().text("Please Select Designation");
		$("#error_designation").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_designation").fadeOut();},8000);
		$("#designation").click(function(){$("#error_designation").hide().text;});
		value_return = 'false';
		
	}
	if(date_of_birth == ''){
		
		$("#error_date_of_birth").show().text("Please Provide Birth Date");
		$("#error_date_of_birth").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_date_of_birth").fadeOut();},8000);
		$("#date_of_birth").click(function(){$("#error_date_of_birth").hide().text;});
		value_return = 'false';
		
	}
	if(m_anniversary == ''){
		
		$("#error_m_anniversary").show().text("Please Provide Marriage Anniversary Date");
		$("#error_m_anniversary").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_m_anniversary").fadeOut();},8000);
		$("#m_anniversary").click(function(){$("#error_m_anniversary").hide().text;});
		value_return = 'false';
		
	}
	if(date_of_joining == ''){
		
		$("#error_date_of_joining").show().text("Please Provide Joining Date");
		$("#error_date_of_joining").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_date_of_joining").fadeOut();},8000);
		$("#date_of_joining").click(function(){$("#error_date_of_joining").hide().text;});
		value_return = 'false';
		
	}
	if(date_of_retirement == ''){
		
		$("#error_date_of_retirement").show().text("Please Provide Retirement Date");
		$("#error_date_of_retirement").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_date_of_retirement").fadeOut();},8000);
		$("#date_of_retirement").click(function(){$("#error_date_of_retirement").hide().text;});
		value_return = 'false';
		
	}
	if(place_of_posting == ''){
		
		$("#error_place_of_posting").show().text("Please select place of posting ");
		$("#error_place_of_posting").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_place_of_posting").fadeOut();},8000);
		$("#place_of_posting").click(function(){$("#error_place_of_posting").hide().text;});
		value_return = 'false';
		
	}
	if(street_address == ''){
		
		$("#error_street_address").show().text("Please Provide Street Address");
		$("#error_street_address").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_street_address").fadeOut();},8000);
		$("#street_address").click(function(){$("#error_street_address").hide().text;});
		value_return = 'false';
		
	}
	if(district == ''){
		
		$("#error_district").show().text("Please Select District");
		$("#error_district").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_district").fadeOut();},8000);
		$("#district").click(function(){$("#error_district").hide().text;});
		value_return = 'false';
		
	}
	if(pin_code == ''){
		
		$("#error_pin_code").show().text("Please Enter Pin Code");
		$("#error_pin_code").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_pin_code").fadeOut();},8000);
		$("#pin_code").click(function(){$("#error_pin_code").hide().text;});
		value_return = 'false';
		
	}
	if(street_address_per == ''){
		
		$("#error_street_address_per").show().text("Please Provide Street Address");
		$("#error_street_address_per").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_street_address").fadeOut();},8000);
		$("#street_address_per").click(function(){$("#error_street_address_per").hide().text;});
		value_return = 'false';
		
	}
	if(district_per == ''){
		
		$("#error_district_per").show().text("Please Select District");
		$("#error_district_per").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_district").fadeOut();},8000);
		$("#district_per").click(function(){$("#error_district_per").hide().text;});
		value_return = 'false';
		
	}
	if(pin_code_per == ''){
		
		$("#error_pin_code_per").show().text("Please Enter Pin Code");
		$("#error_pin_code_per").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_pin_code").fadeOut();},8000);
		$("#pin_code_per").click(function(){$("#error_pin_code_per").hide().text;});
		value_return = 'false';
		
	}
//	if(photo == ''){
		//	$("#photo").val('/writereaddata/MRSAC/files/default/default_image.jpg');
	//	$("#error_photo").show().text("Please Select Photo");
	//	$("#error_photo").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_photo").fadeOut();},8000);
	//	$("#photo").click(function(){$("#error_photo").hide().text;});
		//value_return = 'true';
		
	//}
	
	if(value_return == 'false')
	{
		$('#common_validation_error_modal').modal('show');
		$('body').scrollTop(0);
		return false;
	}
	else{
		return true;
		//exit();			
	}
	
}


	//this function is used for add flipbook, edit flipbook validations
	function add_edit_flipbook_validation(){
	
		
		var english_title = $('#english_title').val();
		
		//For ckeditor validation
		var english_content = CKEDITOR.instances['english_content'].getData().replace(/<[^>]*>/gi, '').length;	
		
		var marathi_title = $('#marathi_title').val();
		
		//For ckeditor validation
		var marathi_content = CKEDITOR.instances['marathi_content'].getData().replace(/<[^>]*>/gi, '').length;	
		var page_status = $('#status').val();
		var category = $('#category').val();
		var zip_flipbook = $('#zip_flipbook').val();
		var book_cover_image=$('#book_cover_image').val();
		var current_book_cover_image=$('#current_book_cover_image').attr('src');
		
		var value_return = 'true';
		
		if(english_title == ''){
			
			$("#error_english_title").show().text("Please enter english title");
			$("#error_english_title").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			$("#english_title").click(function(){$("#error_english_title").hide().text;});
			value_return = 'false';
			
		}
		
		if(current_book_cover_image == ''){
			
			if(book_cover_image == ''){
				
				$("#error_image").show().text("Please select cover image");
				$("#error_image").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
				$("#book_cover_image").click(function(){$("#error_image").hide().text;});
				value_return = 'false';
				
			}
		}
		if(!english_content){
			
			$("#error_english_content").show().text("Please enter english content");
			$("#error_english_content").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			setTimeout(function(){ $("#error_english_content").fadeOut();},3000);
			//$("#cke_1_contents").on(function(){$("#error_english_content").hide().text;});
			value_return = 'false';
			
		}
		
		if(marathi_title == ''){
			
			$("#error_marathi_title").show().text("Please enter marathi title");
			$("#error_marathi_title").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			$("#marathi_title").click(function(){$("#error_marathi_title").hide().text;});
			value_return = 'false';
			
		}
		if(!marathi_content){
			
			$("#error_marathi_content").show().text("Please enter marathi content");
			$("#error_marathi_content").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			setTimeout(function(){ $("#error_marathi_content").fadeOut();},3000);
			//$("#cke_2_contents").on(function(){$("#error_marathi_content").hide().text;});
			value_return = 'false';
			
		}
		
		if(category == ''){
			
			$("#error_category").show().text("Please Select category");
			$("#error_category").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			$("#category").click(function(){$("#error_category").hide().text;});
			value_return = 'false';
			
		}
		
		if($('#flipbook_file_docs').text() == ''){
			
			if(zip_flipbook == ''){
				
				$("#error_zip_flipbook").show().text("Please upload required zip file");
				$("#error_zip_flipbook").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
				$("#zip_flipbook").click(function(){$("#error_zip_flipbook").hide().text;});
				value_return = 'false';
				
			}
		}
		//'map_small_copy' is the validation for add_map date:22/02/2018 Mohnish
		var map_small_copy=$("#map_small_copy").val();
		
		if($('#map_small_copy_docs').text() == ''){
			if(map_small_copy == ''){
					
					$("#error_map_small_copy").show().text("Please upload small map ");
					$("#error_map_small_copy").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
					$("#map_small_copy").click(function(){$("#error_map_small_copy").hide().text;});
					value_return = 'false';
					
				}
		}	
			//'map_large_copy' is the validation for add_map date:22/02/2018 Mohnish
		var map_large_copy=$("#map_large_copy").val();
		
		if($('#map_large_copy_docs').text() == ''){
			if(map_large_copy == ''){
					
					$("#error_map_large_copy").show().text("Please upload small map ");
					$("#error_map_large_copy").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
					$("#map_large_copy").click(function(){$("#error_map_large_copy").hide().text;});
					value_return = 'false';
					
				}
		}
		
		if(value_return == 'false')
		{
			side_status_panel_validation();
			$('#common_validation_error_modal').modal('show');
			$('body').scrollTop(0);
			return false;
		}
		else{
			
			if(side_status_panel_validation() == false){
					$('#common_validation_error_modal').modal('show');
					$('body').scrollTop(0);
					return false;
				
				}else{
					return true;
					//exit();	
				}
			//		
		}
					
	} 


	//this function is used for zip file validations
	function zip_file_browse_onclick(field_id){
		
		var selected_file = $('#'.concat(field_id)).val();
		var ext_type_array = ["zip","rar"];
		
		var get_file_size = $('#'.concat(field_id))[0].files[0].size;
		var get_file_ext = selected_file.split(".");
		
		var value_return = 'true';
		
		get_file_ext = get_file_ext[get_file_ext.length-1].toLowerCase();
		//alert(get_file_size);
						   
		if(get_file_size > 200000000)
		{
			
			$("#error_size_".concat(field_id)).show().text("Please select file below 200MB");
			$("#error_size_".concat(field_id)).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_size_".concat(field_id)).fadeOut();},8000);
			$("#".concat(field_id)).click(function(){$("#error_size_".concat(field_id)).hide().text;});
			$('#'.concat(field_id)).val('')
			
			value_return = 'false';

		}
		
		
		if (ext_type_array.lastIndexOf(get_file_ext) == -1){
			
			
			$("#error_type_".concat(field_id)).show().text("Please select zip type file only");
			$("#error_type_".concat(field_id)).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_type_".concat(field_id)).fadeOut();},8000);
			$("#".concat(field_id)).click(function(){$("#error_type_".concat(field_id)).hide().text;});
			$('#'.concat(field_id)).val('');
			
			value_return = 'false';
		   
		}
		
		if(value_return == 'false')
			{
				return false;
			}
			else{
				return true;
				//exit();			
			}
		
	}


	//this function is used for jpeg file validations
	function image_file_browse_onclick(field_id){

		var selected_file = $('#'.concat(field_id)).val();
		 //added png extension to allow png file in photos section date:08/01/2018 Suggest by Naveen sir done by Mohnish
		var ext_type_array = ["jpeg","jpg","png"];

		var get_file_size = $('#'.concat(field_id))[0].files[0].size;
		var get_file_ext = selected_file.split(".");

		var value_return = 'true';

		get_file_ext = get_file_ext[get_file_ext.length-1].toLowerCase();

		if(get_file_size > 2097152)
		{
			
			$("#error_size_".concat(field_id)).show().text("Please select file below 2mb");
			$("#error_size_".concat(field_id)).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_size_".concat(field_id)).fadeOut();},8000);
			$("#".concat(field_id)).click(function(){$("#error_size_".concat(field_id)).hide().text;});
			$('#'.concat(field_id)).val('')
			
			value_return = 'false';

		}


		if (ext_type_array.lastIndexOf(get_file_ext) == -1){
			
			 //added png extension to allow png file in photos section date:08/01/2018 Suggest by Naveen sir done by Mohnish
			$("#error_type_".concat(field_id)).show().text("Please select jpeg,png type file only");
			$("#error_type_".concat(field_id)).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_type_".concat(field_id)).fadeOut();},8000);
			$("#".concat(field_id)).click(function(){$("#error_type_".concat(field_id)).hide().text;});
			$('#'.concat(field_id)).val('');
			
			value_return = 'false';
		   
		}

		if(value_return == 'false')
			{
				return false;
			}
			else{
				return true;
				//exit();			
			}

	}
	
	
	//This function is called on file upload browse button to validate selected file
function map_file_browse_onclick(field_id){
	
	var selected_file = $('#'.concat(field_id)).val();
	var ext_type_array = ["jpg" , "pdf", "png"];
	
	var get_file_size = $('#'.concat(field_id))[0].files[0].size;
	var get_file_ext = selected_file.split(".");
	
	var value_return = 'true';
	
	get_file_ext = get_file_ext[get_file_ext.length-1].toLowerCase();
	
	if(get_file_size > 20971520)
	{
		
		$("#error_size_".concat(field_id)).show().text("Please select file below 20mb");
		$("#error_size_".concat(field_id)).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_size_".concat(field_id)).fadeOut();},8000);
		$("#".concat(field_id)).click(function(){$("#error_size_".concat(field_id)).hide().text;});
		$('#'.concat(field_id)).val('')
		value_return = 'false';

	}
	
	
	if (ext_type_array.lastIndexOf(get_file_ext) == -1){
		
    
		$("#error_type_".concat(field_id)).show().text("Please select file of jpg, pdf, png type only");
		$("#error_type_".concat(field_id)).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_type_".concat(field_id)).fadeOut();},8000);
		$("#".concat(field_id)).click(function(){$("#error_type_".concat(field_id)).hide().text;});
		$('#'.concat(field_id)).val('');
		
		value_return = 'false';
       
    }
	
	if(value_return == 'false')
		{
			return false;
		}
		else{
			return true;
			//exit();			
		}
	
}
	
	
	
	//this function is used for add edit flipbook category, subcategory validations
	function add_edit_flipbook_category_validation(){
			
		var english_title = $('#category_title_english').val();	
		var english_content = $('#category_content_english').val();		
		var marathi_title = $('#category_title_marathi').val();
		var marathi_content = $('#category_content_marathi').val();
		var page_status = $('#status').val();	
		var parent_category = $('#parent_category').val();	
		
		var value_return = 'true';
					
		if(parent_category == ''){
			
			$("#error_parent_category").show().text("Please Select parent category");
			$("#error_parent_category").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			$("#parent_category").click(function(){$("#error_parent_category").hide().text;});
			value_return = 'false';
			
		}		
					
		if(english_title == ''){
			
			$("#error_category_title_english").show().text("Please enter english title");
			$("#error_category_title_english").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			$("#category_title_english").click(function(){$("#error_category_title_english").hide().text;});
			value_return = 'false';
			
		}
		if(!english_content){
			
			$("#error_category_content_english").show().text("Please enter english content");
			$("#error_category_content_english").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			setTimeout(function(){ $("#error_category_content_english").fadeOut();},3000);
			//$("#category_content_english").on(function(){$("#error_category_content_english").hide().text;});
			value_return = 'false';
			
		}
		
		if(marathi_title == ''){
			
			$("#error_category_title_marathi").show().text("Please enter marathi title");
			$("#error_category_title_marathi").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			$("#category_title_marathi").click(function(){$("#error_category_title_marathi").hide().text;});
			value_return = 'false';
			
		}
		if(!marathi_content){
			
			$("#error_category_content_marathi").show().text("Please enter marathi content");
			$("#error_category_content_marathi").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			setTimeout(function(){ $("#error_category_content_marathi").fadeOut();},3000);
			//$("#category_content_marathi").on(function(){$("#error_category_content_marathi").hide().text;});
			value_return = 'false';
			
		}
		
		
		/*if(page_status == 4){
		
			//call function to validate common side status panel
			if(side_status_panel_validation() == false){
				value_return = 'false';
			};
		
		}else{
			//call function to validate common side status panel
			if(side_status_panel_validation() == false){
				value_return = 'false';
			};
		
		}*/
		
		if(value_return == 'false')
		{
			side_status_panel_validation();
			$('#common_validation_error_modal').modal('show');
			$('body').scrollTop(0);
			return false;
		}
		else{
			
			if(side_status_panel_validation() == false){
					$('#common_validation_error_modal').modal('show');
					$('body').scrollTop(0);
					return false;
				
				}else{
					return true;
					//exit();	
				}
			//		
		}
					
	} 

//File validation common function
//This function is called on file upload browse button to validate selected file
function file_browse_onclick_for_image(field_id){
	var selected_file=[];
	 selected_file = $('#'.concat(field_id)).val();
	 //added png extension to allow png file in photos section date:08/01/2018 Suggest by Naveen sir done by Mohnish
	var ext_type_array = ["jpg","png"];
	var get_file_size = $('#'.concat(field_id))[0].files[0].size;
	var get_file_ext = selected_file.split(".");
	
	var value_return = 'true';
	
	get_file_ext = get_file_ext[get_file_ext.length-1].toLowerCase();
	
	if(get_file_size > 2097152)
	{
		
		$("#error_size_".concat(field_id)).show().text("Please select file below 2mb");
		$("#error_size_".concat(field_id)).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_size_".concat(field_id)).fadeOut();},8000);
		$("#".concat(field_id)).click(function(){$("#error_size_".concat(field_id)).hide().text;});
		$('#'.concat(field_id)).val('')
		
		value_return = 'false';

	}
	
	
	if (ext_type_array.lastIndexOf(get_file_ext) == -1){
		
         //added png extension to allow png file in photos section date:08/01/2018 Suggest by Naveen sir done by Mohnish
		$("#error_type_".concat(field_id)).show().text("Please select file of jpg or png type only");
		$("#error_type_".concat(field_id)).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_type_".concat(field_id)).fadeOut();},8000);
		$("#".concat(field_id)).click(function(){$("#error_type_".concat(field_id)).hide().text;});
		$('#'.concat(field_id)).val('');
		
		value_return = 'false';
       
    }
	
	if(value_return == 'false')
		{
			return false;
		}
		else{
			return true;
			//exit();			
		}
	
}
//function for png and jpg
function file_browse_onclick_for_image_png(field_id){
	var selected_file=[];
	 selected_file = $('#'.concat(field_id)).val();
	var ext_type_array = ["jpg","png"];
	var get_file_size = $('#'.concat(field_id))[0].files[0].size;
	var get_file_ext = selected_file.split(".");
	
	var value_return = 'true';
	
	get_file_ext = get_file_ext[get_file_ext.length-1].toLowerCase();
	
	if(get_file_size > 2097152)
	{
		
		$("#error_size_".concat(field_id)).show().text("Please select file below 2mb");
		$("#error_size_".concat(field_id)).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_size_".concat(field_id)).fadeOut();},8000);
		$("#".concat(field_id)).click(function(){$("#error_size_".concat(field_id)).hide().text;});
		$('#'.concat(field_id)).val('')
		
		value_return = 'false';

	}
	
	
	if (ext_type_array.lastIndexOf(get_file_ext) == -1){
		
        
		$("#error_type_".concat(field_id)).show().text("Please select file of jpg or png type only");
		$("#error_type_".concat(field_id)).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_type_".concat(field_id)).fadeOut();},8000);
		$("#".concat(field_id)).click(function(){$("#error_type_".concat(field_id)).hide().text;});
		$('#'.concat(field_id)).val('');
		
		value_return = 'false';
       
    }
	
	if(value_return == 'false')
		{
			return false;
		}
		else{
			return true;
			//exit();			
		}
	
}


function side_status_panel_validation(){
		
	var publish_date = $('#publish_date').val();			
	var archive_date = $('#archive_date').val();
	var status = $('#status').val();	
	
	var image_upload_xx=$('#image_upload_xx').val();
	var current_cover_image =$('#current_cover_image').attr('src');
	
	var meta_keyword = $('#meta_keyword').val();
	var meta_description = $('#meta_description').val();
	var value_return = 'true';
		
	var from = $("#publish_date").val().split("/");
	var publish_date_match = new Date(from[2], from[1] - 1, from[0]);
	 
	var from = $("#archive_date").val().split("/");
	var archive_date_match = new Date(from[2], from[1] - 1, from[0]);
	
	if(publish_date_match > archive_date_match){
		$("#error_archive_date").show().text("Archive date can not be less than Publish date");
		$("#error_archive_date").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_archive_date").fadeOut();},8000);
		$("#archive_date").click(function(){$("#error_archive_date").hide().text;});
		value_return = 'false';
	
	}
	if(publish_date == ''){
		
		$("#error_publish_date").show().text("Publish date can not be empty");
		$("#error_publish_date").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_publish_date").fadeOut();},8000);
		$("#publish_date").click(function(){$("#error_publish_date").hide().text;});
		value_return = 'false';

	}
	if(archive_date == ''){
		$("#archive_date").val('01/01/2030');
		//$("#error_archive_date").show().text("Archive date can not be empty");
		//$("#error_archive_date").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_archive_date").fadeOut();},8000);
		//$("#archive_date").click(function(){$("#error_archive_date").hide().text;});
		//value_return = 'false';

	}
	
	if(status == ''){
		
		$("#error_status").show().text("Please Select Status");
		$("#error_status").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_status").fadeOut();},8000);
		$("#status").click(function(){$("#error_status").hide().text;});
		value_return = 'false';
		
	}
	if(meta_keyword == ''){
		
		$("#error_meta_keyword").show().text("Please enter page meta keyword");
		$("#error_meta_keyword").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_meta_keyword").fadeOut();},8000);
		$("#meta_keyword").click(function(){$("#error_meta_keyword").hide().text;});
		value_return = 'false';
		
	}
	if(meta_description == ''){
		
		$("#error_meta_description").show().text("Please enter page meta description");
		$("#error_meta_description").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_meta_description").fadeOut();},8000);
		$("#meta_description").click(function(){$("#error_meta_description").hide().text;});
		value_return = 'false';
		
	}
	
	
	/*if(!current_cover_image){
	
		if(image_upload_xx == ''){
			//$("#image_upload_xx").val('/writereaddata/MRSAC/files/default/default_image.jpg');
			//$("#error_image").show().text("Please select cover image.");
			//$("#error_image").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//$("#error_image").click(function(){$("#error_image").hide().text;});
			//value_return = 'true';
			
		}
	
	}*/
	
	if(value_return == 'false')
	{
		return false;
	}
	else{
		
		return true;
		//exit();	
	}
}



//to validate add/edit tender form data
function add_edit_recruitment_validation(){
	
	
	//split path to find controller and action
	var path = window.location.pathname;
	var paths = path.split("/");
	var controller = path[2];
	var action = paths[3];
	
	
	var awarded_to = $('#awarded_to').val();
	var vacancy = $('#vacancy').val();
	var awarded_amount=$('#awarded_amount').val();
	
	
	var reference_no = $('#reference_no').val();
	var english_title = $('#english_title').val();	
	//var english_content = $('#english_content').val();
	
	var marathi_title = $('#marathi_title').val();
	//var marathi_content = $('#marathi_content').val();	
	
	
	var contact_person = $('#contact_person').val();
	
	var tender_fee = $('#tender_fee').val();
	
	var emd_fee = $('#emd_fee').val();
	var selected_tender = $('#selected_tender').val();
	
	var value_return = 'true';

	if(awarded_to == ''){
		
		$("#error_awarded_to").show().text("Please enter awarded to.");
		$("#error_awarded_to").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_reference_no").fadeOut();},8000);
		$("#awarded_to").click(function(){$("#error_awarded_to").hide().text;});
		value_return = 'false';
		
	}
	
	if(awarded_amount == ''){
	
	$("#error_awarded_amount").show().text("Please enter awarded amount.");
	$("#error_awarded_amount").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
	//setTimeout(function(){ $("#error_reference_no").fadeOut();},8000);
	$("#awarded_amount").click(function(){$("#error_awarded_amount").hide().text;});
	value_return = 'false';
	
	}
	
	if(reference_no == ''){
		
		$("#error_reference_no").show().text("Please enter advertise no.");
		$("#error_reference_no").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_reference_no").fadeOut();},8000);
		$("#reference_no").click(function(){$("#error_reference_no").hide().text;});
		value_return = 'false';
		
	}
	if(vacancy == ''){
		
		$("#error_vacancy").show().text("Please enter no of vacancy.");
		$("#error_vacancy").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_reference_no").fadeOut();},8000);
		$("#vacancy").click(function(){$("#error_vacancy").hide().text;});
		value_return = 'false';
		
	}
	
	
	if(english_title == ''){
		
		$("#error_english_title").show().text("Please enter post name in english");
		$("#error_english_title").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_english_title").fadeOut();},8000);
		$("#english_title").click(function(){$("#error_english_title").hide().text;});
		value_return = 'false';
		
	}
	if(marathi_title == ''){
		
		$("#error_marathi_title").show().text("Please enter post name in marathi");
		$("#error_marathi_title").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_marathi_title").fadeOut();},8000);
		$("#marathi_title").click(function(){$("#error_marathi_title").hide().text;});
		value_return = 'false';
		
	}
	
	
	
	
	
	if(tender_fee == ''){
		
		$("#error_tender_fee").show().text("Please enter serial no");
		$("#error_tender_fee").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_tender_fee").fadeOut();},8000);
		$("#tender_fee").click(function(){$("#error_tender_fee").hide().text;});
		value_return = 'false';
		
	}
	
	if(selected_tender == ''){
		
		$("#error_selected_tender").show().text("Please Select Tender");
		$("#error_selected_tender").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"left"});
		//setTimeout(function(){ $("#error_selected_tender").fadeOut();},8000);
		$("#selected_tender").click(function(){$("#error_selected_tender").hide().text;});
		value_return = 'false';
		
	}
	
	
	if(action == 'add_new_recruitment' || action == 'edit_recruitment' ){
		
		var english_content = CKEDITOR.instances['english_content'].getData().replace(/<[^>]*>/gi, '').length;
		var marathi_content = CKEDITOR.instances['marathi_content'].getData().replace(/<[^>]*>/gi, '').length;	
		
		if(!(english_content)){
		
		$("#error_english_content").show().text("Please enter post description in English");
		$("#error_english_content").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
		//setTimeout(function(){ $("#error_english_content").fadeOut();},8000);
		$("#english_content").click(function(){$("#error_english_content").hide().text;});
		value_return = 'false';
		
		}
		if(!(marathi_content)){
			
			$("#error_marathi_content").show().text("Please enter post description in Marathi");
			$("#error_marathi_content").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_marathi_content").fadeOut();},8000);
			$("#marathi_content").click(function(){$("#error_marathi_content").hide().text;});
			value_return = 'false';
			
		}
	
	
	}	
	
	//call function to validate common side status panel

	/*if(side_status_panel_validation() == false){
				value_return = 'false';
			};
	
	if(value_return == 'false')
	{
		return false;
	}
	else{
		exit();			
	}*/
	//alert(value_return);die();
	if(value_return == 'false')
	{
		side_status_panel_validation();
		$('#common_validation_error_modal').modal('show');
		$('body').scrollTop(0);
		return false;
	}
	else{
		
		if(side_status_panel_validation() == false){
				$('#common_validation_error_modal').modal('show');
				$('body').scrollTop(0);
				return false;
			
			}else{
				//exit();	
				return true;
			}
		//		
	}
	
}


// Dynamic message alert box , Done by Pravin Bhakare 18-02-2019
function validation_alert(message){	

	$('#validation_alert_message_model').modal('show');
	$('#validation_message_text').text(message);
}
	
// Validation function for header image upload , Done by Pravin Bhakare 18-02-2019	
function imageVaildDimensions(id,width,height) {

	var fi = document.getElementById(id);
	var file = fi.files.item(0)
	var reader = new FileReader(); // CREATE AN NEW INSTANCE.
	$("#"+id+"Current").css('display','none');
	
	var selected_file=[];
	selected_file = $('#'.concat(id)).val();
	var ext_type_array = ["jpg","png"];
	var get_file_size = $('#'.concat(id))[0].files[0].size;
	var get_file_ext = selected_file.split(".");
	var image_holder = $("#"+id+"_holder");
	
	var value_return = 'true';
	
	get_file_ext = get_file_ext[get_file_ext.length-1].toLowerCase();
	
	if(get_file_size > 2097152)	{  value_return = 'false';  }	
	
	if (ext_type_array.lastIndexOf(get_file_ext) == -1){  value_return = 'false';  }
	if(value_return == 'false'){ 
		$("#"+id).val('');
		validation_alert('Invalid Filetype or Filesize');		
	} else{ 
		reader.onload = function (e) { 
	
			var img = new Image();  
			img.src = e.target.result;    
			img.onload = function () {
				var w = this.width;
				var h = this.height;
				
				if(w != width && h != height){ 
					$("#"+id).val('');
					validation_alert('Invalid Image Dimensions'); 					
				}else{
					
					$("<img />", {
					"src": e.target.result,
					"width":"400",
					"class": "thumb-image"
					}).appendTo(image_holder);
					return true;
					//exit();
				}
			}
			
		};
		reader.readAsDataURL(file);
		
	}	
}