
//This function is used for both add firm and added firm validations.
function add_firm_validations(){
	
	// Empty fields validations starts	
		//alert('validation js running');
		
		//split path to find controller and action
		var path = window.location.pathname;
		var paths = path.split("/");
		var controller = paths[2];
		var action = paths[3];
		
		
		
		//taking values from form fields
		var certification_type=$("#certification_type").val();
		//var export_unit=$("#export_unit").val();
		var firm_name=$("#firm_name").val();
		var aadhar_card_no=$("#aadhar_card_no").val();
		var email=$("#email").val();
		var mobile_no=$("#mobile_no").val();
		var fax_no=$("#fax_no").val();
		var commodity_category=$("#commodity_category").val();
		var commodity=$("#commodity").val();
		var selected_commodity=$("#selected_commodity").val();
		var total_charge=$("#total_charge").val();
		var packaging_materials=$("#packaging_materials").val();
		var selected_packaging_materials=$("#selected_packaging_materials").val();
		var other_packaging_details=$("#other_packaging_details").val();
		var street_address=$("#street_address").val();
		var state=$("#state").val();
		var district=$("#district").val();
		var postal_code=$("#postal_code").val();
		
		var value_return = 'true';
		
		
		
		//condition to work validations for both add firm and added firm
		if(action == 'add_firm')
		{				
			
			//validation to check give application is old or new. If application old then check it is expired or not
			// Done By pravin 04/10/2017
			if($('input[name="data[is_already_granted]"]:checked').val() == "yes")
			{
				var last_renewal_dates = $("#last_renewal_dates"+x).val();
				var certificate_no = $("#certification_no").val();
				var grant_date = $("#grant_date").val();
				var result = check_renewal_date_due(grant_date);
				var renewal_date_due = result.renewal_date_due;
				
				if(certificate_no == ''){
					$("#error_certificate_no").show().text("Please enter Certificate No.");
					$("#error_certificate_no").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
					$("#certification_no").click(function(){$("#error_certificate_no").hide().text;});
					value_return = 'false';
				}
				
				if(grant_date == ''){
					$("#error_grant_date").show().text("Please Select Certificate Grant Date.");
					$("#error_grant_date").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
					$("#grant_date").click(function(){$("#error_grant_date").hide().text;});
					value_return = 'false';
				}
				
				if(renewal_date_due == 'yes')
				{	
					if(last_renewal_dates == '')
					{
						$("#error_renewal_dates"+x).show().text("Please enter renewal date. If not renewed, So the application was expired. Please register with new application");
						$("#error_renewal_dates"+x).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
						$(".add_more_button").click(function(){$("#error_renewal_dates"+x).hide().text;});
						value_return = 'false';
						
					}else{
						
						var result2 = valid_last_renewal_date(last_renewal_dates);
						var application_expired_status = result2.application_expired_status;
						if(application_expired_status == 'yes')
						{
							$("#error_renewal_dates"+x).show().text("Please enter next renewal date with 'addmore' button. If not renewed, So the application was expired. Please register with new application");
							$("#error_renewal_dates"+x).css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
							$(".add_more_button").click(function(){$("#error_renewal_dates"+x).hide().text;});
							value_return = 'false';
						}
						
					}	
				}
			}	
			
			
			
			if(certification_type==""){
			
				$("#error_certification_type").show().text("Please select Certification type.");
				$("#error_certification_type").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
				//setTimeout(function(){ $("#error_certification_type").fadeOut();},8000);
				$("#certification_type").click(function(){$("#error_certification_type").hide().text;});
				value_return = 'false';
			}


		/*	if(export_unit==""){
			
			$("#error_export_unit").show().text("Please Check Export unit yes or no.");
			$("#error_export_unit").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_export_unit").fadeOut();},8000);
			$("#export_unit").click(function(){$("#error_export_unit").hide().text;});
			value_return = 'false';
			}
	*/

			//if(firm_name==""){
			if(check_whitespace_validation_textbox(firm_name).result == false){	
				
				$("#error_firm_name").show().text(check_whitespace_validation_textbox(firm_name).error_message);
				$("#error_firm_name").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
				//setTimeout(function(){ $("#error_firm_name").fadeOut();},8000);
				$("#firm_name").click(function(){$("#error_firm_name").hide().text;});
				value_return = 'false';
			}

			
		}
		
		
		//These four fields required in added firm so not in condition
		/*	if(aadhar_card_no==""){
				
				$("#error_aadhar_card_no").show().text("Please enter your Aadhar card no.");
				$("#error_aadhar_card_no").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
				//setTimeout(function(){ $("#error_aadhar_card_no").fadeOut();},8000);
				$("#aadhar_card_no").click(function(){$("#error_aadhar_card_no").hide().text;});
				value_return = 'false';
			}
			else{
				
				if(aadhar_card_no.match(/^(?=.*[0-9])[0-9]{12}$/g) || aadhar_card_no.match(/^[X-X]{8}[0-9]{4}$/i)){//also allow if 8 X $ 4 nos found //added on 12-10-2017 by Amol  
						
				}else{				
					
					$("#error_aadhar_card_no").show().text("Only numbers allowed, min & max length is 12");
					//$("#error_aadhar_card_no").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
					$("#aadhar_card_no").focusout(function(){$("#error_aadhar_card_no").hide().text;});
					value_return = 'false';
				}
				
			}
			*/

			if(email==""){
				
				
				$("#error_email").show().text("Please enter your email.");
				$("#error_email").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
				//setTimeout(function(){ $("#error_email").fadeOut();},8000);
				$("#email").click(function(){$("#error_email").hide().text;});
				value_return = 'false';
			}
			else{
				
				if(!email.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/))   
				{ 
					
					$("#error_email").show().text("Entered email id is not valid.");
					$("#error_email").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
					//setTimeout(function(){ $("#error_email").fadeOut();},8000);
					$("#email").click(function(){$("#error_email").hide().text;});
					value_return = 'false';
					
				}
			
			}	
				
				

			if(mobile_no==""){
				
				$("#error_mobile_no").show().text("Please Enter your Mobile No.");
				$("#error_mobile_no").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
				//setTimeout(function(){ $("#error_mobile_no").fadeOut();},8000);
				$("#mobile_no").click(function(){$("#error_mobile_no").hide().text;});
				value_return = 'false';
			}
			else{
				
				if(!(mobile_no.match(/^(?=.*[0-9])[0-9]{10}$/g) || mobile_no.match(/^[X-X]{6}[0-9]{4}$/i)))//also allow if 6 X $ 4 nos found //added on 12-10-2017 by Amol   
				{ 
					
					$("#error_mobile_no").show().text("Mobile no. is not valid, only 10 digits no. allowed");
					$("#error_mobile_no").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
					//setTimeout(function(){ $("#error_mobile_no").fadeOut();},8000);
					$("#mobile_no").click(function(){$("#error_mobile_no").hide().text;});
					value_return = 'false';
					
				}
			}

			if(fax_no !=""){
				if(!fax_no.match(/^(?=.*[0-9])[0-9]{5,15}$/g))   
				{
					
					$("#error_fax_no").show().text("Given phone no. is not valid");
					$("#error_fax_no").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
					//setTimeout(function(){ $("#error_fax_no").fadeOut();},8000);
					$("#fax_no").click(function(){$("#error_fax_no").hide().text;});
					value_return = 'false';
				}
			}

		
		
		
		//condition to work validations for both add firm and added firm
		if(action == 'add_firm')
		{
		
			if($("#certification_type").val() != 2 )
			{
			
			
				if(commodity_category==""){
					
					$("#error_commodity_category").show().text("Please Select Commodity Category");
					$("#error_commodity_category").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
					//setTimeout(function(){ $("#error_commodity_category").fadeOut();},8000);
					$("#commodity_category").click(function(){$("#error_commodity_category").hide().text;});
					value_return = 'false';
				}
				
			/*	if(commodity==""){
					
					$("#error_commodity").show().text("Please Select Commodity from list");
					$("#error_commodity").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
					//setTimeout(function(){ $("#error_commodity").fadeOut();},8000);
					$("#commodity").click(function(){$("#error_commodity").hide().text;});
					value_return = 'false';
				}
			*/

				if(!($('select#selected_commodity option').length > 1)){//changed from 0 to 1 on 09-08-2017 by Amol
					
					$("#error_selected_commodity").show().text("There are no selected commodities. Please select first.");
					$("#error_selected_commodity").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
					//setTimeout(function(){ $("#error_selected_commodity").fadeOut();},8000);
					$("#selected_commodity").click(function(){$("#error_selected_commodity").hide().text;});
					value_return = 'false';
				}
				
			}
			else if($("#certification_type").val() == 2)
			{
				
				if($('select#selected_packaging_materials option').length > 0){
				
					if(($("#selected_packaging_materials option:selected" ).text() == 'Other'))
					{
						if(other_packaging_details==""){
							
							$("#error_other_packaging").show().text("Please Enter other packaging materials names");
							$("#error_other_packaging").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
							//setTimeout(function(){ $("#error_other_packaging").fadeOut();},8000);
							$("#other_packaging_details").click(function(){$("#error_other_packaging").hide().text;});
							value_return = 'false';
						}
					}			
				}
				else{			
					
					$("#error_packaging_materials").show().text("Please Select Packaging Material from list");
					$("#error_packaging_materials").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
					//setTimeout(function(){ $("#error_packaging_materials").fadeOut();},8000);
					$("#selected_packaging_materials").click(function(){$("#error_packaging_materials").hide().text;});
					value_return = 'false';	
				}
				
				
			}
			
			/*
			if($('#aadhar_auth_check').prop("checked") == false){
				
				$("#error_aadhar_auth_check").show().text("Please check to confirm Aadhar authentication");
				$("#error_aadhar_auth_check").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
				//setTimeout(function(){ $("#error_aadhar_auth_check").fadeOut();},8000);
				$("#aadhar_auth_check").click(function(){$("#error_aadhar_auth_check").hide().text;});
				value_return = 'false';	
			}
			*/
		}
		
		
		
		

		//if(street_address==""){
		if(check_whitespace_validation_textarea(street_address).result == false){	
			
			$("#error_street_address").show().text(check_whitespace_validation_textarea(street_address).error_message);
			$("#error_street_address").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_street_address").fadeOut();},8000);
			$("#street_address").click(function(){$("#error_street_address").hide().text;});
			value_return = 'false';
		}
		
		
		
		if(state==""){
			
			$("#error_state").show().text("Please Select State.");
			$("#error_state").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_state").fadeOut();},8000);
			$("#state").click(function(){$("#error_state").hide().text;});
			value_return = 'false';
		}
		


		if(district==""){
			
			$("#error_district").show().text("Please Select District.");
			$("#error_district").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_district").fadeOut();},8000);
			$("#district").click(function(){$("#error_district").hide().text;});
			value_return = 'false';
		}
		
		
		
		if(postal_code==""){
			
			$("#error_postal_code").show().text("Please Enter Postal code");
			$("#error_postal_code").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_postal_code").fadeOut();},8000);
			$("#postal_code").click(function(){$("#error_postal_code").hide().text;});
			value_return = 'false';
		}
		else{
			
			if(!postal_code.match(/^(?=.*[0-9])[0-9]{6}$/g))   
			{ 
				
				$("#error_postal_code").show().text("Postal code is not valid, only 6 digits no. mandatory");
				$("#error_postal_code").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
				//setTimeout(function(){ $("#error_postal_code").fadeOut();},8000);
				$("#postal_code").click(function(){$("#error_postal_code").hide().text;});
				value_return = 'false';
				
			}
		}
		
		
		if(value_return == 'false')
		{	
			alert("Please check some fields are missing or not proper.");
			return false;
		}
		else{
			//exit();
			return true;
			
		}


}







//This function is used for New Customer registration form validations.
function register_customer_validations(){
	
	//split path to find controller and action
	
	var path = window.location.pathname;
	var paths = path.split("/");
	var controller = paths[2];
	var action = paths[3];
    var email=$("#email").val();
	var dob=$("#dob").val();
	var mobile=$("#mobile").val();
	var value_return = 'true';
	
	if(dob==""){
				
		
		$("#error_dob").show().text("Please select date of birth.");
		$("#error_dob").css({"color":"red","font-size":"13px","font-weight":"500"});
		//setTimeout(function(){ $("#error_email").fadeOut();},8000);
		$("#email").click(function(){$("#error_dob").hide().text;});
		value_return = 'false';
	}	
	if(email==""){
				
		
		$("#error_email").show().text("Please enter your email.");
		$("#error_email").css({"color":"red","font-size":"13px","font-weight":"500"});
		//setTimeout(function(){ $("#error_email").fadeOut();},8000);
		$("#email").click(function(){$("#error_email").hide().text;});
		value_return = 'false';
	}
	else{
		
		if(!email.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/))   
		{ 
			
			$("#error_email").show().text("Entered email id is not valid.");
			$("#error_email").css({"color":"red","font-size":"13px","font-weight":"500"});
			//setTimeout(function(){ $("#error_email").fadeOut();},8000);
			$("#email").click(function(){$("#error_email").hide().text;});
			value_return = 'false';
			
		}
	
	}
		
	
		
	if(mobile==""){
	
		$("#error_mobile_no").show().text("Please Enter your Mobile No.");
		$("#error_mobile_no").css({"color":"red","font-size":"13px","font-weight":"500"});
		//setTimeout(function(){ $("#error_mobile_no").fadeOut();},8000);
		$("#mobile").click(function(){$("#error_mobile_no").hide().text;});
		value_return = 'false';
	}
	else{
		
		if(!(mobile.match(/^(?=.*[0-9])[0-9]{10}$/g) || mobile.match(/^[X-X]{6}[0-9]{4}$/i)))//also allow if 8 X $ 4 nos found //added on 12-10-2017 by Amol     
		{ 
			
			$("#error_mobile_no").show().text("Mobile no. is not valid, only 10 digits no. allowed");
			$("#error_mobile_no").css({"color":"red","font-size":"13px","font-weight":"500"});
			//setTimeout(function(){ $("#error_mobile_no").fadeOut();},8000);
			$("#mobile").click(function(){$("#error_mobile_no").hide().text;});
			value_return = 'false';
			
		}
	}	
		
	
	//condition to work validations only for first time registration
	if(action == 'applicant_registration')
	{		
	
		var captchacode=$("#captchacode").val();
		var confirm_email=$("#confirm_email").val();
	
		if(email != ""){
			if(email == confirm_email)				
			{			
				//alert('blank name');
				//value_return = 'true'; // by pravin 01/05/2017
			}
			else{				
		
		    $("#error_diffe_confirm_email").show().text("Email id and confirm email id not match.");
			$("#error_diffe_confirm_email").css({"color":"red","font-size":"13px","font-weight":"500"});
			//setTimeout(function(){ $("#error_email").fadeOut();},8000);
			$("#confirm_email").click(function(){$("#error_diffe_confirm_email").hide().text;});
			value_return = 'false';
			
			}
			
		}
		
		
		if(confirm_email==""){
			
			$("#error_confirm_email").show().text("Please enter confirm email.");
			$("#error_confirm_email").css({"color":"red","font-size":"13px","font-weight":"500"});
			//setTimeout(function(){ $("#error_email").fadeOut();},8000);
			$("#confirm_email").click(function(){$("#error_confirm_email").hide().text;});
			value_return = 'false';
		}
		else{
			
			if(!confirm_email.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/))   
			{ 
				
				$("#error_confirm_email").show().text("Entered email id is not valid.");
				$("#error_confirm_email").css({"color":"red","font-size":"13px","font-weight":"500"});
				//setTimeout(function(){ $("#error_confirm_email").fadeOut();},8000);
				$("#confirm_email").click(function(){$("#error_confirm_email").hide().text;});
				value_return = 'false';
				
			}
		
		}
		
		
	if(captchacode==""){
		
		$("#error_captchacode").show().text("Please enter your captcha code.");
		$("#error_captchacode").css({"color":"red","font-size":"13px","font-weight":"500"});
		//setTimeout(function(){ $("#error_password").fadeOut();},8000);
		$("#captchacode").click(function(){$("#error_captchacode").hide().text;});
		value_return = 'false';
		}
		
	}
	
	
		

	if(value_return == 'false')
	{
		//alert("Please check some fields are missing or not proper.");
		return false;
	}
	else{
		
			//exit();
			return true;
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
								url: "../read-user-pass-value",
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
								url: "../read-user-pass-value",
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
								url: "../read-user-pass-value",
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
			
			//exit();
			return true;
			
		}
	
	
}









//This function is used for Forgot password input validations.
function forgot_password_validations(){
	
	// Empty Field validation
					
		var customer_id=$("#customer_id").val();
		var email=$("#email").val();
		var captchacode=$("#captchacode").val();
		
		var value_return = 'true';
		
		if(customer_id==""){
				
			$("#error_customer_id").show().text("Please enter Applicant Id");
			$("#error_customer_id").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_customer_id").fadeOut();},8000);
			$("#Oldpassword").click(function(){$("#error_customer_id").hide().text;});
			value_return = 'false';
			}
			
			
			
		if(email==""){
				
			
			$("#error_email").show().text("Please enter your email.");
			$("#error_email").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_email").fadeOut();},8000);
			$("#email").click(function(){$("#error_email").hide().text;});
			value_return = 'false';
		}
		else{
			
			if(!email.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/))   
			{ 
				
				$("#error_email").show().text("Entered email id is not valid.");
				$("#error_email").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
				//setTimeout(function(){ $("#error_email").fadeOut();},8000);
				$("#email").click(function(){$("#error_email").hide().text;});
				value_return = 'false';
				
			}
		
		}
		
		
		
			
		if(captchacode==""){
			
			$("#error_captchacode").show().text("Please enter Captcha code.");
			$("#error_captchacode").css({"color":"red","font-size":"14px","font-weight":"500","text-align":"right"});
			//setTimeout(function(){ $("#error_captchacode").fadeOut();},8000);
			$("#captchacode").click(function(){$("#error_captchacode").hide().text;});
			value_return = 'false';
			}
		
		
		if(value_return == 'false')
		{
		//	alert("Please check some fields are missing or not proper.");
			return false;
		}
		else{
			//exit();
			return true;
			
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
			
			
			$.ajax({
								type: "POST",
								url: "../../users/read-user-pass-value",
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
								url: "../../users/read-user-pass-value",
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
			//exit();
			return true;
			
		}
	
	
}











//File validation common function
//This function is called on file upload browse button to validate selected file
function file_browse_onclick(field_id){
	
	var selected_file = $('#'.concat(field_id)).val();
	var ext_type_array = ["jpg" , "pdf"];
	
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
		
        
		$("#error_type_".concat(field_id)).show().text("Please select file of jpg, pdf type only");
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






// function for whitespace and blank value validation by pravin 10-07-2017
	function check_whitespace_validation_textarea(field_value){
		
		var field_length = field_value.length;
		var field_trim = $.trim(field_value);
		var update_field_value = field_trim.length;
		var error_message1 = 'This field is mandatory and maximum 180 characters allowed';
		var error_message2 = 'Please Remove blank space before and after the text';
		
		if(field_value != "")
		{
			if(field_length == update_field_value)
			{
				if(field_length <= 180)
				{
					return true;
				}
					return {result: false, error_message: error_message1};
			}
				return {result: false, error_message: error_message1};
		}else{
				return {result: false, error_message: error_message1};
			 }
		
	}
	
	
	
	
	
	
	// function for whitespace and blank value validation by pravin 10-07-2017
	function check_whitespace_validation_textarea(field_value){
		
		var field_length = field_value.length;
		var field_trim = $.trim(field_value);
		var update_field_value = field_trim.length;
		var error_message1 = 'This field is mandatory and maximum 180 characters allowed';
		var error_message2 = 'Please Remove blank space before and after the text';
		
		if(field_value != "")
		{
			
			//if(field_length == update_field_value)
			//{
				
			// change validation rule for whitespace after and before word by pravin 04-08-2017
			if(update_field_value > 0)
			{	
				if(field_length <= 180)
				{
					return true;
				}
					return {result: false, error_message: error_message1};
			}
				return {result: false, error_message: error_message1};
		}else{
				return {result: false, error_message: error_message1};
			 }
		
	}
	
	
	
	
	
	
	// function for whitespace and blank value validation by pravin 10-07-2017
	function check_whitespace_validation_textbox(field_value){
		
		var field_length = field_value.length;
		var field_trim = $.trim(field_value);
		var update_field_value = field_trim.length;
		var error_message1 = 'This field is mandatory and maximum 50 characters allowed';
		var error_message2 = 'Please Remove blank space before and after the text';
		
		if(field_value != "")
		{
			//if(field_length == update_field_value)
			//{
			
			// change validation rule for whitespace after and before word by pravin 04-08-2017
			if(update_field_value > 0)
			{	
				if(field_length <= 50)
				{
					return true;
				}
					return {result: false, error_message: error_message1};
			}
				return {result: false, error_message: error_message1};
		}else{
				return {result: false, error_message: error_message1};
			 }
		
	}
	
	
	// function for Alpha character, whitespace character and blank value validation by pravin 10-07-2017
	function check_alpha_character_validation(field_value){
		
		var field_length = field_value.length;
		var field_trim = $.trim(field_value);
		var update_field_value = field_trim.length;
		var error_message1 = 'This field is mandatory and maximum 50 character alphabets value allowed';
		var error_message2 = 'Please Remove blank space before and after the text';
		
		if(field_value.match(/^[A-z ]{1,50}$/) == null)
		{
			
			return {result: false, error_message: error_message1};
			
		}else{
			
			//if(field_length == update_field_value){
				
			// change validation rule for whitespace after and before word by pravin 04-08-2017
			if(update_field_value > 0)
			{	
				
				return true;
			
			}else{
				
				return {result: false, error_message: error_message1};
			}
		}
		
	}
	
	
	// function for number validation by pravin 10-07-2017
	function check_number_validation(field_value)
	{	
		var field_length = field_value.length;
		var field_trim = $.trim(field_value);
		var update_field_value = field_trim.length;
		var error_message1 = 'This field is mandatory and maximum 20 numeric value allowed';
		var error_message2 = 'Please Remove blank space before and after the text';
		
		if(field_value.match(/^(?=.*[0-9])[0-9]{1,20}$/g) == null)
		{
			//if(field_length == update_field_value)
			//{
				
			// change validation rule for whitespace after and before word by pravin 04-08-2017
			if(update_field_value > 0)
			{	
				return {result: false, error_message: error_message1};
			}
				return {result: false, error_message: error_message1};
				
		}				
		
		return true;
	}
	
	
	// function for email validation by pravin 10-07-2017
	function check_email_validation(field_value)
	{
		var field_length = field_value.length;
		var field_trim = $.trim(field_value);
		var update_field_value = field_trim.length;
		var error_message1 = 'Please enter valid email address like(abc@gmail.com)';
		var error_message2 = 'Please Remove blank space before and after the text';
		
		if(field_value.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/) == null)
		{
			//if(field_length == update_field_value)
			//{
				
			// change validation rule for whitespace after and before word by pravin 04-08-2017
			if(update_field_value > 0)
			{	
				return {result: false, error_message: error_message1};
			}
				return {result: false, error_message: error_message1};
		}				
		
		return true;
	}
	
	
	// function for aadhar validation by pravin 10-07-2017
	function check_aadhar_validation(field_value)
	{
		var field_length = field_value.length;
		var field_trim = $.trim(field_value);
		var update_field_value = field_trim.length;
		var error_message1 = 'This field is mandatory and 12 digit numeric value required like(526548547512)';
		var error_message2 = 'Please Remove blank space before and after the text';
		
		if(field_value.match(/^(?=.*[0-9])[0-9]{12}$/g) == null)
		{
			//if(field_length == update_field_value)
			//{
				
			// change validation rule for whitespace after and before word by pravin 04-08-2017
			if(update_field_value > 0)
			{	
				return {result: false, error_message: error_message1};
			}
				return {result: false, error_message: error_message1};
		}				
		
		return true;
	}
	
	
	// function for number with decimal two validation by pravin 10-07-2017
	function check_number_with_decimal_two_validation(field_value)
	{
		var field_length = field_value.length;
		var field_trim = $.trim(field_value);
		var update_field_value = field_trim.length;
		var error_message1 = 'This field is mandatory and maximum 20 digit numeric value with 2 decimal point allowed';
		var error_message2 = 'Please Remove blank space before and after the text';
		
		if(field_value.match(/^\d{1,25}(\.\d{1,2})?$/) == null)
		{
			//if(field_length == update_field_value)
			//{
				
			// change validation rule for whitespace after and before word by pravin 04-08-2017
			if(update_field_value > 0)
			{	
				return {result: false, error_message: error_message1};
			}
				return {result: false, error_message: error_message1};
		}				
		
		return true;
	}

	
	// function for number with decimal four validation by pravin 10-07-2017
	function check_number_with_decimal_four_validation(field_value)
	{
		var field_length = field_value.length;
		var field_trim = $.trim(field_value);
		var update_field_value = field_trim.length;
		var error_message1 = 'This field is mandatory and maximum 20 digit numeric value with 4 decimal point allowed';
		var error_message2 = 'Please Remove blank space before and after the text';
		
		if(field_value.match(/^\d{1,25}(\.\d{1,4})?$/) == null)
		{
			//if(field_length == update_field_value)
			//{
				
			// change validation rule for whitespace after and before word by pravin 04-08-2017
			if(update_field_value > 0)
			{	
				return {result: false, error_message: error_message1};
			}
				return {result: false, error_message: error_message1};
		}				
		
		return true;
	}	
	
	// function for mobile number validation by pravin 10-07-2017
	function check_mobile_number_validation(field_value)
	{
		var field_length = field_value.length;
		var field_trim = $.trim(field_value);
		var update_field_value = field_trim.length;
		var error_message1 = 'This field is mandatory and 10 digit numeric value required like(9638527412)';
		var error_message2 = 'Please Remove blank space before and after the text';
		
		if(field_value.match(/^(?=.*[0-9])[0-9]{10}$/g) == null)
		{
			//if(field_length == update_field_value)
			//{
				
			// change validation rule for whitespace after and before word by pravin 04-08-2017
			if(update_field_value > 0)
			{	
				return {result: false, error_message: error_message1};
			}
				return {result: false, error_message: error_message1};
		}				
		
		return true;
	}
	
	
	// function for landline number validation by pravin 10-07-2017
	function check_landline_number_validation(field_value)
	{
		var field_length = field_value.length;
		var field_trim = $.trim(field_value);
		var update_field_value = field_trim.length;
		var error_message1 = 'This field is mandatory and Min. 6 and Max. 12 digit numeric value allowed like(071222656880)';
		var error_message2 = 'Please Remove blank space before and after the text';
		
		if(field_value.match(/^(?=.*[0-9])[0-9]{6,12}$/g) == null)
		{
			//if(field_length == update_field_value)
			//{
				
			// change validation rule for whitespace after and before word by pravin 04-08-2017
			if(update_field_value > 0)
			{	
				return {result: false, error_message: error_message1};
			}
				return {result: false, error_message: error_message1};
		}				
		
		return true;
	}
	
	
	// function for postal code number validation by pravin 10-07-2017
	function check_postal_code_validation(field_value)
	{
		var field_length = field_value.length;
		var field_trim = $.trim(field_value);
		var update_field_value = field_trim.length;
		var error_message1 = 'This field is mandatory and 6 digit numeric value allowed';
		var error_message2 = 'Please Remove blank space before and after the text';
		
		if(field_value.match(/^(?=.*[0-9])[0-9]{6}$/g) == null)
		{
			//if(field_length == update_field_value)
			//{
				
			// change validation rule for whitespace after and before word by pravin 04-08-2017
			if(update_field_value > 0)
			{	
				return {result: false, error_message: error_message1};
			}
				return {result: false, error_message: error_message1};
		}				
		
		return true;
	}
	
	
	// function for blank file upload validation by pravin 10-07-2017
	function check_file_upload_validation(field_value)
	{
		var error_message = 'Please upload the required file';
		
		if(field_value == "")
		{
			return {result: false, error_message:error_message };
		}				
		
		return true;
	}
	
	
	// function for drop_down validation by pravin 10-07-2017
	function check_drop_down_validation(field_value)
	{
		var error_message = 'Please select the required valid option';
		
		if(field_value == "")
		{
			return {result: false, error_message:error_message};
		}				
		
		return true;
	}
	
	
	// function for radio button validation by pravin 10-07-2017
	function check_radio_button_validation(field_value)
	{
		var error_message = 'Please select the option';
		
		if($('input[name="data['+field_value+']"]:checked').val() != "yes" && $('input[name="data['+field_value+']"]:checked').val() != "no")
		{
			
			return {result: false, error_message:error_message};
			
		}
		
		return true;
	}
	
	
	// function for radio value validation by pravin 10-07-2017
	function check_radio_value(field_value)
	{
		
		 if($('input[name="data['+field_value+']"]:checked').val() == "yes")
				{
					return 'yes';
					
				}else if($('input[name="data['+field_value+']"]:checked').val() == "no")
						{
							return 'no';
							
						}
		
	}
	
	
	
	// This function used to find "renewal date due" vaild or not for old application
	// Done By pravin 03/10/2017
	
	function check_renewal_date_due(grant_date)
	{
		
		var certification_type = $('#certification_type').val();
		var current_date = new Date();
		var grant_date = grant_date.split("/");
		var get_grant_month = grant_date[1];
		var get_grant_year = grant_date[2];
		
		if(certification_type == 1){
			
			if(get_grant_month <= 3)
			{
				var valid_upto_year =  parseInt(get_grant_year)+ parseInt(4);
			}else{
				var valid_upto_year =  parseInt(get_grant_year)+ parseInt(5);
			}
			var valid_upto_date = '31/03/'+ valid_upto_year;
			
		}else if(certification_type == 2){
			
			var valid_upto_year =  parseInt(get_grant_year)+ parseInt(1);
			var valid_upto_date = '31/12/'+ valid_upto_year;
			
		}else if(certification_type == 3){
			
			if(get_grant_month <= 6)
			{
				var valid_upto_year =  parseInt(get_grant_year)+ parseInt(1);
			}else{
				var valid_upto_year =  parseInt(get_grant_year)+ parseInt(2);
			}
			var valid_upto_date = '30/06/'+ valid_upto_year;
		}
		
		var convert_valid_upto_date = valid_upto_date.split("/");
		var final_valid_upto_date = new Date(convert_valid_upto_date[2], convert_valid_upto_date[1] - 1, convert_valid_upto_date[0]);
		if( current_date > final_valid_upto_date ){
			
			
			return {renewal_date_due: "yes", application_expired_status: "yes"};
			
		}else{
			
			return {renewal_date_due: "no", application_expired_status: "no"};
		
		}
	}
	
	
	
	// This function used to validated renewal valid date with current date for old application
	// Done By pravin 04/10/2017
	function valid_last_renewal_date(last_renewal_date)
	{
		
		var certification_type = $('#certification_type').val();
		var current_date = new Date();
		var get_grant_year = last_renewal_date;
		
		if(certification_type == 1){
			
			var valid_upto_year =  parseInt(get_grant_year)+ parseInt(5);
			
			var valid_upto_date = '31/03/'+ valid_upto_year;
			
		}else if(certification_type == 2){
				
			var valid_upto_year =  parseInt(get_grant_year)+ parseInt(2);
			
			var valid_upto_date = '31/12/'+ valid_upto_year;
			
		}else if(certification_type == 3){
			
			
			var valid_upto_year =  parseInt(get_grant_year)+ parseInt(2);
							
			var valid_upto_date = '30/06/'+ valid_upto_year;
		}
		
		var convert_valid_upto_date = valid_upto_date.split("/");
		var final_valid_upto_date = new Date(convert_valid_upto_date[2], convert_valid_upto_date[1] - 1, convert_valid_upto_date[0]);
		if( current_date > final_valid_upto_date ){
			
			
			return {application_expired_status: "yes"};
			
		}else{
			
			return {application_expired_status: "no"};
		
		}
	}



		//This function is used for applicant login validations.
		function login_customer_validations(){

			var customer_id=$("#customer_id").val();
			var password=$("#passwordValidation").val();
			var captchacode=$("#captchacode").val();
		
			var value_return = 'true';
		
			if(customer_id==""){
				
				$("#error_customer_id").show().text("Please enter your Applicant id.");
				$("#error_customer_id").css({"color":"red","font-size":"13px"});
				//setTimeout(function(){ $("#error_email").fadeOut();},8000);
				$("#customer_id").click(function(){$("#error_customer_id").hide().text;});
				value_return = 'false';
			}
			
			if(password==""){
				
				$("#error_password").show().text("Please enter your password.");
				$("#error_password").css({"color":"red","font-size":"13px"});
				//setTimeout(function(){ $("#error_password").fadeOut();},8000);
				$("#passwordValidation").click(function(){$("#error_password").hide().text;});
				value_return = 'false';
			}
			
			if(captchacode==""){	
				
				$("#error_captchacode").show().text("Please enter Captcha code");
				$("#error_captchacode").css({"color":"red","font-size":"13px"});
				//setTimeout(function(){ $("#error_password").fadeOut();},8000);
				$("#captchacode").click(function(){$("#error_captchacode").hide().text;});
				value_return = 'false';
			}
				
			
			if(value_return == 'false')
			{
			//	alert("Please check some fields are missing or not proper.");
				return false;
			}
			else{
				
				var PasswordValue = document.getElementById('passwordValidation').value;
			
				$.ajax({
								type: "POST",
								url: "../users/read-user-pass-value",
								data:{passwordValidation: PasswordValue},
								async:false, 
								beforeSend: function (xhr) { // Added this line
            					xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
            					},
								success: function(data){
									if(data.length>60){
									document.getElementById('passwordValidation').value = data;
									}else{
										return false;
									}
								},
								error:function(){
									return false;
								}

							});
			 
				//exit();
				return true;
			}
		}

