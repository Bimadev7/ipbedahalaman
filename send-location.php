<?php
// send-location.php
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['message'])) {
    $message = $data['message'];

    // Ganti dengan nomor WhatsApp Anda
    $whatsappNumber = '087741706965'; // Nomor WhatsApp Anda
    $apiKey = 'YOUR_WHATSAPP_API_KEY'; // API key WhatsApp Anda

    // Kirim pesan menggunakan API WhatsApp
    $url = "https://api.whatsapp.com/send?phone=$whatsappNumber&text=" . urlencode($message);
    file_get_contents($url);
}
