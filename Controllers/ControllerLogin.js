const ModelUser = require('../models/ModelsUser');

class ControllerLogin{
    VerificarLogin(req,res){
        const {email,senha}= req.body;
        const usuario = new ModelUser(null,null,email,senha);

        usuario.VerificarLogin((erro,resultado) =>{
            if(erro){
                console.error(erro);
                return res.status(500).json({message:"Erro no Servidor"});
            }

            if(resultado.length === 0){
                return res.status(400).json({message:"Usuario ou Senha incorretos"});
            }

            return res.status(200).json({
                message:"Logado com sucesso",
                user: resultado[0]
            });
        });
    }
}

module.exports = new ControllerLogin();
