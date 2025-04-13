// Dados para enviar para a API
const data = {
    valor: valor, // O valor da doação
    chave_publica: chavePublica, // Sua chave pública da API
    chave_secreta: chaveSecreta, // Sua chave secreta da API
    descricao: "Doação para Kiss Fitness", // Descrição da transação
    email: "doaçãoslick@gmail.com", // Email do doador
    nome: "Leno Lopes", // Nome do doador
    telefone: "5532999586204", // Telefone do doador
    cpf: "457.577.910-55", // CPF do doador
};

// Fazendo a requisição para a API
fetch('https://api.seuprovedor.com/gerar-pix', { // Substitua pela URL correta
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
    console.log('Sucesso:', result);
    // Aqui você pode processar a resposta e gerar o QR Code ou outro conteúdo
})
.catch(error => {
    console.error('Erro ao gerar o Pix:', error);
});
