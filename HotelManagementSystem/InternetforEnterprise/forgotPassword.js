
			function forgotPassword(){
				var userName = document.getElementById("getUserName").value;
				
				var dataEntered = true;
				if(userName ==""){
					window.alert("Please enter the userName field cannot be empty");
					dataEntered = false;
				}
				
				if(dataEntered){
					if((userName == "ucm")||(userName == "abcd")){
						location.href = "D:/anvesh/forgotPassword2.html";
					} else if((userName == "admin")|| (userName == "ucm")){
						location.href = "D:/anvesh/forgotPassword2.html";
					}
					else {
						window.alert("Please enter the valid userName");
					}
				} 
			}
		