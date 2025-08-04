// importando sequelize pegando so a propriedade exclusiva dele usando {}as chaves
const {Sequelize} = require('sequelize');
require('dotenv').config();

// banco de dados
const sequelize = new Sequelize(
    process.env.DB_DATABASE, // nome do banco
    process.env.DB_USER, // usuario
    process.env.DB_PASSWORD, // senha 
    {
        host: process.env.DB_HOST,// host 
        dialect: 'mysql', // define que é mysql
        logging:false  // desativa logs SQL (meio que para nao mostrar as queries no console)
    }
)

// testar conexao
sequelize.authenticate()
    .then(() => console.log("Conexão com o banco funfando!!"))
    .catch((error) => console.log("Erro ao conectar com o banco!!", error));

// exportando modulo
module.exports = sequelize;