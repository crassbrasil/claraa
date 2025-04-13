document.querySelectorAll('.donate-btn').forEach(button => {
    button.addEventListener('click', function () {
        const value = this.getAttribute('data-value');
        generatePixQRCode(value);
    });
});

function generatePixQRCode(value) {
    fetch('gerar_pix.php?valor=' + value)
        .then(response => response.json())
        .then(data => {
            if (data.qr_code && data.copia_cola) {
                document.getElementById('qr-code-container').innerHTML = `
                    <img src="${data.qr_code}" alt="QR Code Pix" style="max-width: 100%; height: auto; margin-bottom: 10px;">
                    <p id="pix-code">${data.copia_cola}</p>
                `;
                document.getElementById('popup').style.display = 'flex';
            } else {
                alert("Erro: Resposta da API incompleta.");
            }
        })
        .catch(error => {
            console.error('Erro ao gerar QR Code Pix:', error);
            alert("Erro ao conectar à API.");
        });
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function copyPixCode() {
    const pixCode = document.getElementById('pix-code').innerText;
    navigator.clipboard.writeText(pixCode).then(() => {
        alert('Código Pix copiado!');
    });
}
