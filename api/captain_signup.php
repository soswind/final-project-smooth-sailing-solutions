<?php
include './mysql.php';



// Get data from Sign Up form Gast POST method

$firstname = $_POST['captain_first_name'];
$lastname = $_POST['captain_last_name'];
$profile_text = $_POST['captain_profile_text'];
$birthday = $_POST['captain_birthday'];
$gast_image = $_POST['captain_image'];
$email = $_POST['captain_email'];
$address = $_POST['captain_address'];
$zip_code = $_POST['captain_postal_no'];
$city = $_POST['captain_city'];
$phone = $_POST['captain_phone'];
$password = $_POST['captain_password']; // Remember to hash!!

$response = "INSERT INTO crew_profile (first_name, last_name, profile_text, birthday, picture_url, email, address, zip_code, city, phone_number, password) 
VALUES ('$firstname', '$lastname', '$profile_text', '$birthday', '$gast_image', '$email','$address', '$zip_code', '$city', '$phone', '$password')";

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