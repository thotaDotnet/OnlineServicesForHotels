<script>
		 
		 function validateFormCustomer(){
			var dataEntered = true;
			
			var x = document.getElementById("idCUsername").value;
			var y = document.getElementById("idCPassword").value;
			
			if(x == ""){
				window.alert("Please enter the username");
				dataEntered = false;
			}
			if(y == ""){
				window.alert("Please enter the password");
				dataEntered = false;
			}
			if(dataEntered){
				if((x == "ucm" && y == "ucm") || (x == "abcd" && y == "abcd")){
				
					location.href = "D:/anvesh/homePage.html";
				} else {
					window.alert("Invalid Credentials");
					
				}
			}
		 }		 
		 
		/*function validateFormCustomer() {
		var x = document.getElementById("idCUsername").value;
		var y = document.getElementById("idCPassword").value;
		if ((x == "balu" && y == "balu") || (x == "bhargav" && y == "bhargav")) {
			location.href = "D:/anvesh/homePage.html";
		} else {
			window.alert("Invalid Credentials");
			document.getElementById("messages").innerHTML = "Please enter the valid username and password"
			return false;			
		}
	} */
	
		
		function validateFormAdmin(){
			var dataEntered = true;
			
			var x = document.getElementById("idAUsername").value;
			var y = document.getElementById("idAPassword").value;
			
			if(x == ""){
				window.alert("Please enter the username");
				dataEntered = false;
			}
			if(y == ""){
				window.alert("Please enter the password");
				dataEntered = false;
			}
			if(dataEntered){
				if((x == "ucm" && y == "ucm") || (x == "admin" && y == "admin")){
				
					location.href = "D:/anvesh/homePage.html";
				} else {
					window.alert("Invalid Credentials");
					
				}
			}
		}	
		
		/*function validateFormAdmin() {
		var x = document.getElementById("idAUsername").value;
		var y = document.getElementById("idAPassword").value;
		if ((x == "admin" && y == "admin") || (x == "mule" && y == "mule")) {
			location.href = "D:/anvesh/shoppingMaals_Online.html";
		} else {
			window.alert("Invalid Credentials");
			document.getElementById("messages").innerHTML = "Please enter the valid username and password for admin"
			return false;			
		}
	 } */
	</script>