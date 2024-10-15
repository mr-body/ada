const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'dist'))); // Usa caminho absoluto

// Corrigir o caminho absoluto para o index.html
app.get('/dev', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html')); // Usa caminho absoluto
});

// Usar res.send para enviar conteúdo HTML para a rota /dev
app.get('/', (req, res) => {
  res.send("<h1>Teste</h1>"); // Envia conteúdo HTML como resposta
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
