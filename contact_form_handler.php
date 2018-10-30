<?php
  $name = $_POST['name'];
  $visitor_email_address = $_POST['email'];
  $message = $_POST['message'];

  $email_from = "ewa.czech@hotmail.com"

  $email_subject = "Contact form submission: $name";
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n Email: $visitor_email_address\n Message \n $message";

  $to = "ewa.czech@hotmail.com";

  $headers .= "From" $email_from \r\n";
  mail($to,$email_subject,$email_body,$headers);
  header("Location: index.html");
}
?>
