<?php

    $name = $_POST["name"];
    $password = $_POST["password"];
    $gender = $_POST["gender"];

    if (empty($name) || empty($password) || empty($gender)) {
        echo "Please fill in all required fields.";
    } else {
        echo "Welcome, $name!  Your gender is $gender.";
    }

?>