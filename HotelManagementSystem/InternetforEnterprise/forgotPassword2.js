
			function forgotPasswordFianl(){
				var place = document.getElementById("getPlace").value;
				var color = document.getElementById("getColor").value;
				
				var dataEntered = true;
				if(place == "" && color == ""){
					window.alert("Both fields Birth Place and Favourite Color cannot be empty");
					dataEntered = false;
				} 
				if(place == ""){
					window.alert("Please enter your birth place");
					dataEntered = false;
				}
				
				if(color == ""){
					window.alert("Please enter your favourite color")
					dataEntered = false;
				}
				
				if(dataEntered){
					if((place == "India") &&(color == "blue")){
						location.href = "D:/anvesh/changePassword.html"
					} else {
						window.alert("Entered Birth Place and Favourite place are wrong")
					}
				}
				
			} //end function forgotPasswordFianl