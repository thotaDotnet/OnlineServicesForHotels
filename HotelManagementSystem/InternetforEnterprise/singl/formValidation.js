function formValidation(){
			var userName = document.getElementById("idUsername").value;
			var firstName = document.getElementById("idfirstName").value;
			var lastName = document.getElementById("idlastName").value;
			var dob = document.getElementById("");
			var maleGender = document.getElementById("idMaleGender");
			var femaleGender = document.getElementById("idFemaleGender");
			var mobileNumber = document.getElementById("idMobileNumber").value;
			var email = document.getElementById("idEmail").value;
			var customerMember = document.getElementById("idCustomer");
			var employeeMember = document.getElementById("idEmployee");
			var password = document.getElementById("idPassword").value;
			var confirmPassword = document.getElementById("idConfirmPassword").value;
			
			
			if(userName_validation(userName,5,12)){
				if(firstName_validation(firstName)){
					if(lastName_validation(lastName)){
						if(gender_validation(maleGender,femaleGender)){
							if(mobile_validation(mobileNumber)){
								if(email_validation(email)){
										if(member_validaiton( customerMember,employeeMember)){
											if(password_validation()){
												if(securityValidation()){
													if(securityAnswerValidation()){
													
													}
												}
											}
											
										}
									}
								}
							}
						}
					}
				
				}	
			
			return false;
			}
			
				function userName_validation(userName,mx,my){
					var userName_length = userName.length; 
					if (userName_length == 0 || userName_length >= my || userName_length < mx)  
						{  
							alert("User Id should not be empty / length be between "+mx+" to "+my);  
						
							return false;  
						}  
						return true;  

					} //end function userName_validation
					
				
				function firstName_validation(firstName){
					var letters_first = (/^[A-Za-z]+$/); 
					if(firstName.match(letters_first))  
					{  
						return true;  
					}  
					else  
					{  
						alert("Please enter all the characters as alpabets in FirstName field");  
						return false;  
					}  
				}  //end function userName_validation
				
				function lastName_validation(lastName){
					var letters_last = (/^[A-Za-z]+$/);
					if(lastName.match(letters_last))
					{
						return true;
					}
					else 
					{
						alert("Please enter all the characters as alphabets in LastName field");
					}
				} // end function lastName_validation
				
				
				function gender_validation(maleGender,femaleGender){
					var x = 0;
					if(maleGender.checked){
						x++;
					}
					if(femaleGender.checked){
						x++;
					}
					if(x == 0){
						window.alert("Please check the gender field");
						return false;
					}
					
					else{
						
						return true;
					}
				
				}//end function gender_validation
				
				function mobile_validation(mobileNumber){
					
					
					if(!isNaN(mobileNumber))
					{
						mobileNumber_length = mobileNumber.length;
						if(mobileNumber_length == 10)
						{
							return true;
						}
						else
						{
						window.alert("Please enter 10 numbers in the text field");
						}
					return true;
					}
					else
					{
					window.alert("Please enter numbers only");
					return false;
					}
					
				} //end function mobile_validation
				
				function email_validation(email){
					var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
					if(email.match(mailformat)){
						return true;
					}else{
						window.alert("Please enter the valid email address");
						return false;
					}
					
				} //end function email_validation
				
				function member_validaiton(customerMember,employeeMember){
					var y = 0;
					if(customerMember.checked){
						y++;
					}
					if(employeeMember.checked){
						y++;
					}
					if(y == 0){
						window.alert("Please check the member field");
						return false;
					}
					
					else{
						
						return true;
					}
				
				} //end function member_validaiton
				
				
				function password_validation(){
					var password = document.getElementById("idPassword").value;
					var confirmPassword = document.getElementById("idConfirmPassword").value;
					var confirmPassword = document.getElementById("idConfirmPassword").value;
		
					var password_length = password.length;
					var confirmPassword_length = confirmPassword.length;
		
					if(password_length != 0 || password_length >= 8 ){
						if(password == confirmPassword){
						return true;
						}else {
							window.alert("password and confirm passwrod should be same");
						}
					} else {
					window.alert("password field should not be empty or password field should have a minimum of 8 characters");
					}
		
				}//end function password_validation
				
				function securityValidation(){
		
					var e = document.getElementById("dropDown");
					var optionSelIndex = e.options[e.selectedIndex].value;
				
					var optionSelectedText = e.options[e.selectedIndex].text;
				
					if (optionSelIndex == "color") {
					
						var getAnswerColor = document.getElementById("idAnswer").value;
						return true;
					}
					else if(optionSelIndex == "place"){
						var getAnswerPlace = document.getElementById("idAnswer").value;
						return true;
					}
					else if(optionSelIndex == "game"){
						var getAnswerGame = document.getElementById("idAnswer").value;
						return true;
					}
					else if(optionSelIndex == "Default"){
						alert("Please select a question");
						return false;
					}
				
					else{
						return true;
					}
				} //end function securityValidation

				function securityAnswerValidation(){
					
					var securityAnswer = document.getElementById("idAnswer").value;
					
					if(securityAnswer == ""){
					
						window.alert("Please fill the answer field also:");
						
					} else {
					
						window.alert("The form is submitted successfully")
						
					}
				} //end function securityAnswerValidation