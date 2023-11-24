
<?php

header("Access-Controll-Allow-Origin: *");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';

try {
$mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'melioraspero24@gmail.com';
$mail->Password = 'dsoc xlxf bqfz orvw';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('melioraspero24@gmail.com', 'Olena Liekan');
$mail->addReplyTo('melioraspero24@gmail.com', 'Olena Liekan');
$mail->addAddress('olena.liekan@gmail.com');
$mail->isHTML(true);
$mail->Subject = "PHPMailer SMTP test";

$mail->Body = 'This is the plain text version of the email content';
$mail->AltBody = "Альтернативное содержание сообщения";

$mail->send();
  echo "Сообщение отправлено";
} catch (Exception $e) {
  echo "Ошибка отправки: {$mail->ErrorInfo}";
}
?>

