const express = require('express');
const { mostraPaginas, detalhaPokemon } = require('./controlador/pokemon');


const rotas = express();

rotas.get('/pokemons', mostraPaginas);
rotas.get('/pokemon/:idOuNome', detalhaPokemon);


module.exports = rotas;