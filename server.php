<?php
$_POST = Json_decode(file_get_contents("php://input"), true);
echo var_dump($_POST);
