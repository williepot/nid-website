<?php
$name = $_POST["fullname"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

echo $name;
echo $email;
echo $subject;
echo $message;

$email_message = "
Name: ".$name."
eMail: ".$email."
Message: ".$message."
";

mail("willie658@gmail.com", "WEB-CONTACT: " + $subject, $email_message);

?>
