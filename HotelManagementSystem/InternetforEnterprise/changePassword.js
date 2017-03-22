function changePassword(){
				var oldPassword = document.getElementById("getOldPassword").value;
				var newPassword = document.getElementById("getNewPassword").value;
				var confirmPassword = document.getElementById("getConfirmPassword").value;
				
				var dataEntered = true;
				if(oldPassword == "" && newPassword == "" && confirmPassword ==""){
					window.alert("All the fields cannot be empty");
					dataEntered = false;
				} // end if
				
				if(oldPassword == ""){
					window.alert("Please enter the old Password field");
					dataEntered = false;
				} //end if
				
				if(newPassword == ""){
					window.alert("Please enter the new Password field");
					dataEntered = false;
				} //end if 
				
				if(confirmPassword == ""){
					window.alert("Please enter the confirm Password field");
					dataEntered = false;
				} //end if	
				if((oldPassword =="ucm")||(oldPassword == "abcd")|| (oldPassword == "admin")){
					if(newPassword == confirmPassword){
						location.href = "D:/anvesh/practice.html";
						window.alert("Successfully changed the password");
					}
					
					else{
						window.alert("New password and confirm password should match");
					}
				} //end if
				
				
			}// end function changePassword