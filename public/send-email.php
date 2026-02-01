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
$to = 'support@calitech-solutions.com';
$subject = 'New Inquiry - ' . $fullName;

// Email body (HTML)
$emailBody = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        h2 { color: #333; }
        p { margin: 10px 0; }
        strong { font-weight: bold; }
    </style>
</head>
<body>
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> $fullName</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Phone:</strong> $phone</p>
    <p><strong>Inquiry Type:</strong> $inquiryType</p>
    <p><strong>Message:</strong></p>
    <p>$message</p>
</body>
</html>
";

// Email headers
$headers = "From: CaliTech Solutions <support@calitech-solutions.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Send email
if (mail($to, $subject, $emailBody, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>
