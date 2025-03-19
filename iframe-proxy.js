const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Importa o middleware CORS
const app = express();

app.use(cors()); // Habilita CORS para todas as rotas

app.get('/proxy', async (req, res) => {
  const url = req.query.url;

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    console.error('Erro ao buscar a URL:', error);
    res.status(500).send('Erro ao buscar a URL');
  }
});

app.listen(3000, () => {
  console.log('Proxy server running on http://localhost:3000');
});
