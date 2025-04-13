// Função chamada ao clicar nos botões
window.gerarPix = async function (valor) {
  try {
    // Mostra loading opcional
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    document.getElementById("qr-code-container").innerHTML = "Carregando QR Code...";

    // Requisição à API para gerar o QR Code e dados Pix
    const response = await fetch("https://api-production-0feb.up.railway.app/api/pagamentos/gerar-pix", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valor })
    });

    const data = await response.json();

    // Exibe QR Code, chave e valor no popup
    document.getElementById("qr-code-container").innerHTML = `<img src="${data.qr_code}" alt="QR Code Pix" style="width: 200px; height: 200px;" />`;
    document.getElementById("chave-pix").textContent = data.copia_cola;
    document.getElementById("valor-pix").textContent = valor.toFixed(2).replace(".", ",");

  } catch (err) {
    console.error("Erro ao gerar Pix:", err);
    alert("Erro ao gerar QR Code. Tente novamente.");
    fecharPopup();
  }
};

// Fecha o popup
window.fecharPopup = function () {
  document.getElementById("popup").style.display = "none";
};

// Copia a chave Pix
window.copiarPix = function () {
  const chave = document.getElementById("chave-pix").textContent;
  navigator.clipboard.writeText(chave).then(() => {
    alert("Chave Pix copiada com sucesso!");
  });
};
async function gerarPix(valor) {
  try {
    const popup = document.getElementById("popup");
    const qrContainer = document.getElementById("qr-code-container");
    const spanChave = document.getElementById("chave-pix");
    const spanValor = document.getElementById("valor-pix");

    // Mostra o popup
    popup.style.display = "flex";

    // Reset conteúdo
    qrContainer.innerHTML = "Carregando QR Code...";
    spanChave.innerText = "";
    spanValor.innerText = "";

    // Chamada à API
    const response = await fetch(`https://api-production-0feb.up.railway.app/pix?valor=${valor}`);
    const data = await response.json();

    // Exibe dados
    qrContainer.innerHTML = `<img src="${data.qr_code_base64}" alt="QR Code Pix" width="220">`;
    spanChave.innerText = data.chave;
    spanValor.innerText = valor.toFixed(2);
    
    // Armazena para cópia
    document.getElementById("copiar-pix").setAttribute("data-chave", data.chave);
  } catch (error) {
    alert("Erro ao gerar Pix. Tente novamente.");
    console.error(error);
    fecharPopup();
  }
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

function copiarPix() {
  const chave = document.getElementById("copiar-pix").getAttribute("data-chave");
  navigator.clipboard.writeText(chave).then(() => {
    alert("Chave Pix copiada!");
  }).catch(err => {
    alert("Erro ao copiar Pix.");
  });
}
