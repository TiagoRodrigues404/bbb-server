<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->IsHtml(true);

$mail->setFrom('maledi2010@i.ua', 'Best Buy Beauty');
$mail->addAddress('melioraspero24@gmail.com');
$mail->Subject = 'New order';

$body = '<h1>You are lucky!</h1>';

if(trim(!empty($_POST['Nome']))) {
    $body.='<p><strong>Primeiro Nome:</strong> '.$_POST['Nome'].'</p>';
}

if(trim(!empty($_POST['Sobrenome']))) {
    $body.='<p><strong>Último Nome:</strong> '.$_POST['Sobrenome'].'</p>';
}

$mail->Body = $body;

if(!$mail->send()) {
    $message = "Erro!";
} else {
    $message = "Sucesso!";
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>