
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

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
$mail->Password = 'Credendovides92!';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->setFrom('melioraspero24@gmail.com', 'Best Buy Beauty');
$mail->addReplyTo('melioraspero24@gmail.com', 'Best Buy Beauty');
$mail->addAddress("olena.liekan@gmail.com","");
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