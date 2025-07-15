// faz a conexao do banco de dados 
// importando mysql
const mysql = require("mysql");
require('dotenv').config();
// banco de dados
const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

if (!conexao){
    console.log("erro ao conectar");
}else{
    console.log("conexao banco funfando");
}

// exportando modulo
module.exports = conexao;