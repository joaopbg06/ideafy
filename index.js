const express = require('express');
const app = express();
const PORT = 3000;
const RotasUser = require('./routes/RotasUser')

app.use(express.json());

app.get('/',(req, res)=>{
    res.send("Pagina Inicial");
})

app.use('/', RotasUser)

app.listen(PORT, ()=>{
    console.log(`Servidor funfando na Porta: ${PORT}`);
})