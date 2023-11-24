
<?php

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
$mail->Password = 'credendovides92!';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->setFrom('melioraspero24@gmail.com', 'Olena Liekan');
$mail->addReplyTo('melioraspero24@gmail.com', 'Olena Liekan');
$mail->addAddress('maledi2010@i.ua');
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