const express = require('express');
const sequelize = require('./config/ConexaoDB');
const app = express();
const PORT = 3000;
const RotasUser = require('./routes/RotasUser')


// importando models para ele criar as tabelas com sequelize.sync
const User = require('./models/User');
const Posts = require('./models/Post');

app.use(express.json());

// atualizada as tabelas automaticamente tipo um migrate 
sequelize.sync({alter: true})
    .then(() => console.log("Tabelas Sincronizadas!!"))
    .catch(erro => console.log("Erro ao sincronizar",erro));

app.get('/',(req, res)=>{
    res.send("Pagina Inicial");
})

app.use('/', RotasUser)

app.listen(PORT, ()=>{
    console.log(`Servidor funfando na Porta: ${PORT}`);
})