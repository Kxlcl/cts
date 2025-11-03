<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get JSON data from request
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate required fields
if (empty($data['fullName']) || empty($data['email']) || empty($data['phone']) || empty($data['inquiryType']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required']);
    exit();
}

// Sanitize inputs
$fullName = htmlspecialchars(strip_tags($data['fullName']));
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(strip_tags($data['phone']));
$inquiryType = htmlspecialchars(strip_tags($data['inquiryType']));
$message = htmlspecialchars(strip_tags($data['message']));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Email configuration
$to = 'nyanoctupus123@gmail.com'; // Test email
$subject = 'New Contact Form Submission - ' . $inquiryType;

// Email body
$emailBody = "New contact form submission:\n\n";
$emailBody .= "Full Name: " . $fullName . "\n";
$emailBody .= "Email: " . $email . "\n";
$emailBody .= "Phone: " . $phone . "\n";
$emailBody .= "Inquiry Type: " . $inquiryType . "\n\n";
$emailBody .= "Message:\n" . $message . "\n";

// Email headers
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to, $subject, $emailBody, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>
