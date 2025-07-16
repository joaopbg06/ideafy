const express = require('express');
const sequelize = require('./config/ConexaoDB');
const app = express();
const PORT = 3000;
const RotasUser = require('./routes/RotasUser')

app.use(express.json());

// atualizada as tabelas automaticamente tipo um migrate 
sequelize.sync()
    .then(() => console.log("Tabelas Sincronizadas!!"))
    .catch(erro => console.log("Erro ao sincronizar",erro));

app.get('/',(req, res)=>{
    res.send("Pagina Inicial");
})

app.use('/', RotasUser)

app.listen(PORT, ()=>{
    console.log(`Servidor funfando na Porta: ${PORT}`);
})