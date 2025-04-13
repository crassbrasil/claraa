<?php
// Recebe o valor da doação
$valor = isset($_GET['valor']) ? $_GET['valor'] : 30; // Default: R$30

// Suas credenciais e URL da API
$chave_publica = "pk_live_FUF01RbBgi0V4BXctjUyLEcqFIDs3d";  // Exemplo
$chave_secreta = "sk_live_n2DcGrRa4ZpxPmtf3QAHszDhCeT2iYj6J7rs6LwawK"; // Exemplo
$endpoint_api = "https://api.lunacheckout.com/stores/0195c2e7-2e42-715b-a58b-b8772879a089/gateways/183";

// Dados da transação para o checkout
$data = [
    "valor" => $valor,
    "chave" => $chave_publica,
    "descricao" => "Doação de R$" . $valor
];

// Configuração da requisição
$options = [
    "http" => [
        "header" => "Content-Type: application/json",
        "method" => "POST",
        "content" => json_encode($data)
    ]
];
$context = stream_context_create($options);

// Envia a requisição para a API
$response = file_get_contents($endpoint_api, false, $context);
$data_response = json_decode($response, true);

// Verifica se a resposta foi válida
if (isset($data_response['qr_code'])) {
    // Retorna o QR Code e o código Pix
    echo json_encode([
        "qr_code" => $data_response['qr_code'],
        "copia_cola" => $data_response['copia_cola']
    ]);
} else {
    echo json_encode([
        "error" => "Erro ao gerar Pix. Tente novamente."
    ]);
}
?>
