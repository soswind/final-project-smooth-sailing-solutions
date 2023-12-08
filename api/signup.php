<?php
include './mysql.php';

// Get data from Sign Up form

$firstname = $_POST['first_name'];
$lastname = $_POST['last_name'];
$profile_text = $_POST['profile_text'];
$birthday = $_POST['birthday'];
$image = $_POST['picture_url'];
$email = $_POST['email'];
$address = $_POST['address'];
$postal_code = $_POST['zip_code'];
$city = $_POST['city'];
$phone = $_POST['phone_number'];
$email = $_POST['email'];
$password = $_POST['password']; // Remember to hash!!

$sql = "INSERT INTO crew_profile (first_name, last_name, profile_text, birthday, picture_url, email, address, zip_code, city, phone_number, email, password) 
VALUES ('$firstname', '$lastname', '$image', '$email', '$skills', '$address', '$zip_code', '$city', '$phone', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Bruger oprettet successfuldt";
} else {
    echo "Fejl ved oprettelse af bruger: " . $conn->error;
}

$conn->close();

?>