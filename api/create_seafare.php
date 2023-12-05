<?php 
include './mysql.php';

$title = mysqli_real_escape_string($mySQL, $_POST['title']);
$destination = mysqli_real_escape_string($mySQL, $_POST['destination']);
// $seafareDescription = mysqli_real_escape_string($mySQL, $_POST['description']);
$startDate = mysqli_real_escape_string($mySQL, $_POST['start_date']);
$endDate = mysqli_real_escape_string($mySQL, $_POST['end_date']);
$startTime = mysqli_real_escape_string($mySQL, $_POST['start_time']);
$endTime = mysqli_real_escape_string($mySQL, $_POST['end_time']);
$price = mysqli_real_escape_string($mySQL, $_POST['price']);
// $seafareArea = mysqli_real_escape_string($mySQL, $_POST['seafare_area']);

$response = "INSERT INTO seafares (title, destination, start_date, end_date, price) VALUES ('$title', '$destination', '$startDate', '$endDate', '$price')";

if ($mySQL->query($response) === TRUE) {
  echo "success";
} else {
  echo "Error: " . $response . "<br>" . $mySQL->error;
}

$mySQL->close();

?>