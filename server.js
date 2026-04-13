// Importações
const express = require('express');
const cors = require('cors');

// Inicialização
const app = express();

// Middlewares
app.use(cors());

// Rota principal (GET)
app.get('/', (req, res) => {
    res.json({
        mensagem: 'Bem-vindo à minha API!',
        status: 'online'
    });
});

// Porta do servidor
const PORT = 3000;

// Inicializar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});