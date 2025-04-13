const valor = 107.90;  // Valor da transação
const chavePix = "a7deca4b-0b6f-4d7e-a377-02acaa197994"; // Exemplo de chave Pix aleatória

// Criar a string do código Pix (com todos os parâmetros do Banco Central)
const pixString = `00020126870014br.gov.bcb.pix2565pix.primepag.com.br/qr/v3/at/${chavePix}5204000053039865802BR5925NEXUS TECH INTERMEDIACOES6008CRICIUMA62070503***6304F05B`;

// URL para gerar o QR Code
const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(pixString)}&size=250x250`;

// Exibir o QR Code
const qrCodeImg = document.createElement("img");
qrCodeImg.src = qrCodeUrl;
qrCodeImg.alt = "QR Code do Pix";
document.getElementById("qr-code").appendChild(qrCodeImg);
