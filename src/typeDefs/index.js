//Se llama al typedef (esquema) de cada submodulo
const accountTypeDefs = require('./accountTypeDefs');
const transactionTypeDefs = require('./transactionTypeDefs');
const authTypeDefs = require('./authTypeDefs');

//Se unen para poder exportar
const schemasArrays = [authTypeDefs, accountTypeDefs, transactionTypeDefs];

//Se exportan
module.exports = schemasArrays;