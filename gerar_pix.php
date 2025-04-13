<?php
// Defina a URL de checkout
$checkout_url = "https://pagamento.kissfitness.com.br/checkout?product=e2450eaf-07e1-11f0-8fa3-46da4690ad53";

// Inicialize o cURL para fazer a requisição à URL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $checkout_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($ch);
curl_close($ch);

// Se a resposta for válida, extraímos o código Pix
if ($response) {
    // Aqui você precisa tratar a resposta conforme o formato que vem da API
    // Se a API retornar o código Pix em um JSON:
    $response_data = json_decode($response, true);
    if (isset($response_data['pix_code'])) {
        echo "Código Pix: " . $response_data['pix_code'];
    } else {
        echo "Erro ao gerar código Pix!";
    }
} else {
    echo "Erro ao acessar o checkout!";
}
?>
