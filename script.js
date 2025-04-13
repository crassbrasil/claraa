<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Doação Kiss Fitness</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>Faça uma Doação para o Kiss Fitness</h1>
    <p>Contribua com um valor para o nosso projeto</p>

    <div class="valores">
      <button class="valor" onclick="gerarPix(2)">R$ 2,00</button>
      <button class="valor" onclick="gerarPix(30)">R$ 30,00</button>
      <button class="valor" onclick="gerarPix(50)">R$ 50,00</button>
    </div>

    <div id="popup" class="popup" style="display: none;">
      <div class="popup-content">
        <span class="close" onclick="fecharPopup()">&times;</span>
        <h3>QR Code da Doação</h3>
        <div id="qr-code-container"></div>
        <p>Chave Pix: <span id="chave-pix"></span></p>
        <p>Valor: R$ <span id="valor-pix"></span></p>
        <button id="copiar-pix" onclick="copiarPix()">Copiar Pix</button>
      </div>
    </div>
  </div>

  <!-- Script principal -->
  <script src="script.js"></script>
</body>
</html>
