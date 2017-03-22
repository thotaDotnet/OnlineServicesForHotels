
			//This function will validate all the fields:
			function sendMessage(){
				var name = document.getElementById("nameContact").value;
				var email = document.getElementById("emailContact").value;
				var message = document.getElementById("message_boxContact").value;
				
				if(name_validation(name)){
					if(email_validation(email)){
						if(message_validation(message)){
						
						}//end if message_validation
					}//end if email_validation
				}//end if name_validation
				
			} //end function sendMessage
			
			function name_validation(name){
				var letters = (/^[A-Za-z]+$/);
				if(name.match(letters)){
					return true;
				} else{
					window.alert("Please enter alphabets only");
				} //end if else
				
			}//end function name_validation
			
			function email_validation(email){
					var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
					if(email.match(mailformat)){
						return true;
					}else{
						window.alert("Please enter the valid email address");
						return false;
					}
					
			} //end function email_validation
			
			function message_validation(message){
				
				if( message.length <= 150 ){
					return true;
				} else{
					window.alert("Please enter 150 characters only");
				} //end if else
				
			}//end function message_validation
		