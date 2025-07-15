const ModelUser = require('../models/ModelsUser');

class ControllerUser{
    UserListar(req,res){
        ModelUser.ListarUser((erro,resultado) => {
            if(erro){
                return res.status(400).json({message: "Erro ao Listar",erro});
            }
            return res.status(200).json({resultado});
        })
    }
    UserAdicionar(req,res){
        const {nome,email,senha}= req.body;

        if(!nome || !email || !senha){
            return res.status(400).json({message:"Preencha todos os campos"});
        }
        const novoUser = new ModelUser(null,nome,email,senha);

        novoUser.AdicionarUser((erro,resultado) => {
            if(erro){
                return res.status(400).json({message: "Erro ao adicionar",erro});
            }
            return res.status(201).json({message : "Adicionado com Sucesso"});
        })
    }
}

module.exports = new ControllerUser();