// Chaves para acessar a API (substitua com suas chaves reais)
const chavePublica = "SUA_CHAVE_PUBLICA";
const chaveSecreta = "SUA_CHAVE_SECRETA";

// Função para gerar o Pix
function gerarPix(valor) {
    const dados = {
        valor: valor,
        chave_publica: chavePublica,
        chave_secreta: chaveSecreta,
        descricao: "Doação para Kiss Fitness",
        email: "doaçãoslick@gmail.com",
        nome: "Leno Lopes",
        telefone: "5532999586204",
        cpf: "457.577.910-55",
    };

    // Chamada para a API para gerar o Pix
    fetch('https://api.seuprovedor.com/gerar-pix', { // Substitua pela URL correta da API
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(result => {
        if (result.status === 'success') {
            // Exibe o popup com QR Code e dados
            mostrarPopup(result.qr_code, result.chave_pix, valor);
        } else {
            alert("Erro ao gerar o Pix: " + result.message);
        }
    })
    .catch(error => {
        console.error('Erro ao gerar o Pix:', error);
        alert("Ocorreu um erro ao tentar gerar o Pix.");
    });
}

// Função para mostrar o popup com QR Code e dados
function mostrarPopup(qrCode, chavePix, valor) {
    document.getElementById("qr-code-container").innerHTML = `<img src="${qrCode}" alt="QR Code Pix">`;
    document.getElementById("chave-pix").textContent = chavePix;
    document.getElementById("valor-pix").textContent = valor.toFixed(2);
    document.getElementById("popup").style.display = "block";
}

// Função para fechar o popup
function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}

// Função para copiar o Pix
function copiarPix() {
    const chavePix = document.getElementById("chave-pix").textContent;
    navigator.clipboard.writeText(chavePix).then(() => {
        alert("Chave Pix copiada!");
    });
}
