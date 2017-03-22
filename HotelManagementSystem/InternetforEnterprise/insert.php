<?php 
	$name = isset($_POST['nameContact']) ? $_POST['nameContact'] : '';
	$email = isset($_POST['emailContact']) ? $_POST['emailContact'] : '';
	$message = isset($_POST['messageboxContact']) ? $_POST['messageboxContact'] : '';
	echo $name;

	if(isset($_POST['sendContact']))
	{
		
		$con = mysqli_connect('localhost','root','') ; 
		if($con)
		{
			echo "Connect made";
		}
		else
		{
		die('Could not connect to database');	
		}
		
		mysqli_select_db($con,'test');
		
		if(mysqli_select_db($con,'test'))
		{
			echo "DB Connect made";
		}
		else
		{
		die('Could not connect to database');	
		}
		
		$query = "insert into contactus (Name, Email, Message) values ('$name','$email','$message');";
		
		$return = mysqli_query($con, $query);
		
		
		if(!$return){
			
			die("Data is not inserted");
		}else{
			
			echo "Data is connected successfully";
			echo "<script>alert('Your request has been sent to administrator successfully get back to you later.')</script>";
			header("refresh:1; url=practice.html");
		}
		
		mysqli_close();
		
	} //end if
?>