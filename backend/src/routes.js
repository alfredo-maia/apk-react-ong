const express = require('express');
const OngController = require('../src/controllers/OngController');
const IncentsController = require('../src/controllers/IncidentController')
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');

const routes = express.Router();

//Rota de criação de ONGS
routes.post('/ongs', OngController.create);

//Rota para listar as ONGS
routes.get('/ongs', OngController.buscaTodos);

console.log('Cheguei aqui');

//Rota de criação dos Incidents 
routes.post('/incidents',IncentsController.create);

//Rota para listar as ongs
routes.get('/incidents',IncentsController.buscaTodos);  

//Rota para deletar os casos 
routes.delete('/incidents/:id', IncentsController.deletar_caso);

//Rota para buscar caso específico
routes.get('/incidents/:id', ProfileController.busca_unica);

//Rota para validar login
routes.post('/sessions', SessionController.create);

module.exports = routes;