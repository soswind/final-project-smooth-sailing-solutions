<?php
include './mysql.php';
/*
header('Content-Type: application/json');

// Get data from the request body
$data = json_decode(file_get_contents('php://input'), true);

// Example: Check username and password (replace with your authentication logic)
if ($data['email'] === 'example_user@gmail.com' && $data['password'] === 'example_password') {
    http_response_code(200);
    echo json_encode(['message' => 'Login successful']);
} else {
    http_response_code(401);
    echo json_encode(['message' => 'Login failed']);
} */

// Check if the connection is successful
if (!$mySQL) {
    die('Database connection error: ' . mysqli_connect_error());
}

$query = "SELECT * FROM seafares";
$result = mysqli_query($mySQL, $query);

if (!$result) {
    die('Query failed: ' . mysqli_error($mySQL));
}

$seafareData = array();
while ($row = mysqli_fetch_assoc($result)) {
    $seafareData[] = $row;
}

mysqli_close($mySQL);

if (ob_get_length() > 0) {
    ob_clean();
}
header('Content-Type: application/json');
echo json_encode($seafareData);
?>