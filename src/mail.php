<?php
    if (isset($_POST)) {
        $to = "agatest@yopmail.com";
        $subject = 'Nouveau message depuis bise-bise.com';
        $data = json_decode(file_get_contents('php://input'), true);
        $message = 'Email : '.$data['email'].' Message : '.$data['message'];
        $success = mail($to, $subject, $message);
        if ($success) {
            echo "Success!";
        }
        else {
            echo "Fail";
        }
    }
?>