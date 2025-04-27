
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;


app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    next();
});


app.get('/pokemon', async(req, res)=>{
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar posts' });
  }
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});