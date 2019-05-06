<?php

$mail = 'Клик произошёл';
$sub = 'Anti bot';
$to = 'vladislavdidkovskij@gmail.com';

mail($to, $sub, $mail);

print_r($mail);


?>