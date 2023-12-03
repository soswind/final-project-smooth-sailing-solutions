<?php
include './mysql.php';

$query = "SELECT * FROM seafares";
$result = mysqli_query($connection, $query);

if (!$result) {
  die('Query failed: ' . mysqli_error($connection));
}

$seafareData = array();
while ($row = mysqli_fetch_assoc($result)) {
    $seafareData[] = $row;
}

mysqli_close($connection);

header('Content-Type: application/json');
echo json_encode($seafareData);
?>