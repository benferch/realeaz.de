<?php

// define variables and set to empty values
$name_error = $email_error = "";
$name = $email = $message = $success = "";

//form is submitted with POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
        $name_error = "Ihr Name fehlt.";
    } else {
        $name = test_input($_POST["name"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
            $name_error = "Nur Buchstaben und Leerzeichen sind erlaubt.";
        }
    }

    if (empty($_POST["email"])) {
        $email_error = "Ihre E-Mail-Adresse fehlt.";
    } else {
        $email = test_input($_POST["email"]);
        // check if e-mail address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $email_error = "Fehlerhaftes E-Mail-Format";
        }
    }

    if (empty($_POST["message"])) {
        $message = "";
    } else {
        $message = test_input($_POST["message"]);
    }

    if ($name_error == '' and $email_error == ''){
        $message_body = '';
        unset($_POST['submit']);
        foreach ($_POST as $key => $value){
            $message_body .=  "$key: $value\n";
        }

        $to = 'benjannik@gmx.de';
        $subject = 'Anfrage';
        if (mail($to, $subject, $message_body, "From: noreply <noreply@realeaz.de>")){
            $success = "Ihre Anfrage wurde abgeschickt. Wir werden Sie schnellstmöglich kontaktieren.";
            $name = $email = $message = '';
        }
    }

}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}