<?php

$to = "aminebneji@gmail.com"
$subject = "Tu as reçu un message depuis ton site !"

$nom = addslashes($_POST['Nom']) ; 
$prenom = addslashes($_POST['Prenom']);
$mail = addslashes($_POST['Mail']); 
$phone = addslashes($_POST['Phone'])
$msg = addslashes($_POST['messageContent']); 


$message = "tu as reçus un message de la part de :".$prenom.".\n" ; 
$message. ="tu peux le contacter au :".$Phone.".\n\n";


$header = 'From: '.$mail . "\r\n" . 
          'Reply-To:'.$mail . "\r\n" . 
          'X-Mailer: PHP/' . phpversion(); 
          
 if(mail($to , $subject , $message , $header)){ 
    echo json_encode([ 
        'status' => 100, 
        'message' => 'Envoi confirmé'
    ]);
 }else{ 
    echo json_encode([ 
        'status' => 101, 
        'message' => 'Echec de l`envoi '
    ])
 }         