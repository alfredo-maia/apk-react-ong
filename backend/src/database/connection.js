const knex = require('knex');
const configuration = require('../../knexfile');

//Buscando a configuração da conecxão
const connection = knex(configuration.development);

module.exports = connection;