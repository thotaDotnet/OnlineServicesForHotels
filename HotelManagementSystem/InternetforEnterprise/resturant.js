function customerValidation(){
				var name = document.getElementById("customerName").value;
				var mobile = document.getElementById("customerMobile").value;
				var date = document.getElementById("customerDate").value;
				var time = document.getElementById("customerTime").value;
				
				if(name_validation(name)){
					if(mobile_validation(mobile)){
						if(time_Validation(time)){
							
						}
					}
				}
				function name_validation(name){
					var letters_first = (/^[A-Za-z]+$/); 
					if(name.match(letters_first))  
					{  
						return true;  
					}  
					else  
					{  
						alert("Please enter all the characters as alpabets in FirstName field");  
						return false;  
					}  
				}  //end function name_validation
				
				function mobile_validation(mobile){
					if(!isNaN(mobile)){
						mobile_length = mobile.length;
						
						if(mobile_length == 10){
							
							
							return true;
						}
						
						else{
							alert("Mobile number can be only 10 numbers");
						}
					
						
							return true;
						
					} else{
						alert("Please enter numbers only");
						return false;
					} //end if
				} //end function mobile_validation
				
				function time_Validation(time){
					 // regular expression to match required time format
						time_expr = /^(\d{1,2}):(\d{2})?$/;
						
						if(time_value= time.match(time_expr)){
								
								
								if(time_value[1] < 0 || time_value[1] > 12){
									alert("Please enter the valid hours " + time_value[1]);
									return false;
								} 
								
								if(time_value[2] < 0 || time_value[2] > 59){
									alert("Please enter the valid minutes " + time_value[2]);
									return false;
								}
								
								alert("Time field is validated");
								alert("Form is successfully submitted and your booking is made");
								return true;
						} //end if
				}//end function time_Validation
				
			}