<!DOCTYPE html>
<html>
	<head>
		<title>Contact us</title>
		<meta charset="utf-8"/>
		<link rel="stylesheet" href="srtle.css">
		<style>
			.sec_left_contact{
				float:left;
				
			}
			
			.sec_right_contact{
				float:right;
				margin-right: 100px;
			}
		</style>
		
		<script>
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
		</script>
	</head>
	<body>
		<div class="container">
			<header>
				<img src="kansascity _final.jpg" alt="logo" class="logo">
				<h1>Online Services in Kansas city</h1>
				<nav class="pag_nav">
					<ul>
						<li><a href="practice.html" >HOME</a></li>
						<li><a href="aboutUs.html" >About us</a></li>
						<!--<li><a href="#" >product</a></li>-->
						<li><a href="aboutUs.html" >Contact us</a></li>
					</ul>
				</nav>
				<div class="clear"></div>
			</header>
			
			<section class="page_top">
				<marquee class="sliding">"We take care of your needs..!"</marquee>
			</section>
			<br>
			
			<div style="text-align:center">
				<h3 style="font-size: 25px">CONTACT</h3><br>
				<hr/><br>
				<h3>We'd Love to help!</h3><br>
				<h4>We like to create things with fun, open-minded people, Feel free to say Hello!</h4><br>
			</div>	
			<br><br>
			
			<section class="sec_left_contact"> 
				<form style="margin-left: 100px" action="contactUs.php" method="post">
					<input type="text" id="nameContact" name="n_name" placeholder="Your Name" style="width: 300px;"/> <br><br>
					<input type="email" id="emailContact" name="n_email" placeholder="Email" style="width: 300px;"/><br><br>
					<input type="text" id="message_boxContact" name="n_message" placeholder="Message" style="width: 300px; height:100px"/><br><br>
					<input type="button" id="sendContact" value="Send" onClick="sendMessage()" style="margin-left:100px; width: 100px" onClick="submitFeedback()" />
					
				</form>
			</section>
			<?php
				$con = mysql_connect("localhost","root","");
				if(!$con){
					
					die("Can not connect :" . mysql_error());
				} //end if
				
				mysql_select_db("test", $con);
				
				 
				$sql="INSERT INTO contactus (name, email, message)
				VALUES
				('$_POST[n_name]','$_POST[n_email]','$_POST[n_message]')";
 
				if (!mysql_query($sql,$con))
				  {
				  die('Error: ' . mysql_error());
				  }
				echo "1 record added";
				 
				mysql_close($con)
			?>
			
			<section class = "sec_right_contact">
				<div style="margin-right:150px">
					<p> &#9993; &nbsp &nbsp &nbsp &nbsp Forex Building</p>
					<p> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp DownTown,KS</p>	
					<br><br>
					<p> &#9742; &nbsp &nbsp &nbsp &nbsp 913-291-6222 </p>
					<br><br>
					<p> Email: onlineServices_ks@gmail.com</p>
				</div>
			</section>
			
			<br>
			<br>
		
				
			<footer class="foot">
			&copy; copyrigths University of Central Missouri<br>
								Chipman Road, LeeSummit <br>
								Missouri
						
			</footer>
			</div>
</html>
		