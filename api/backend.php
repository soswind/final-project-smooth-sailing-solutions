<?php
include './mysql.php';

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
}
