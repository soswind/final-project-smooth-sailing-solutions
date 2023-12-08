<?php
include './mysql.php';

$data = json_decode(file_get_contents("php://input"), true);


// Get data from Sign Up form Gast POST method

$firstname = $_POST['gast_first_name'];
$lastname = $_POST['gast_last_name'];
$profile_text = $_POST['gast_profile_text'];
$birthday = $_POST['gast_birthday'];
$image = $_POST['gast_image'];
$email = $_POST['gast_email'];
$address = $_POST['gast_address'];
$zip_code = $_POST['gast_postal_no'];
$city = $_POST['gast_city'];
$phone = $_POST['gast_phone'];
$password = $_POST['gast_password']; // Remember to hash!!

$response = "INSERT INTO crew_profile (first_name, last_name, profile_text, birthday, picture_url, email, address, zip_code, city, phone_number, password) 
VALUES ('$firstname', '$lastname', '$profile_text', '$birthday', '$image', '$email','$address', '$zip_code', '$city', '$phone', '$password')";

if ($mySQL->query($response) === TRUE) {
    $result = ["message" => "Bruger oprettet successfuldt"];
} else {
    $result = ["error" => "Fejl ved oprettelse af bruger: " . $mySQL->error];
}

$mySQL->close();

header('Content-Type: application/json');
echo json_encode($result);

exit();

?>