const User = require('../models/User');

class ControllerUser{

    async UserListar(req,res){
        try{
            //esperando a busca de usuarios
            const resultado = await User.findAll();
            // retornando os usuarios
            return res.status(200).json({resultado})
        }catch(erro){
            return res.status(400).json({message:"Erro ao Listar Usuarios", erro})
        }
    }

    async UserAdicionar(req,res){
        const {nome,email,senha}= req.body;

        if(!nome || !email || !senha){
            return res.status(400).json({message:"Preencha todos os campos"});
        }

        try{
            // espera a criação do usuario
            await User.create({nome,email,senha});
            // 201 criação 
            return res.status(201).json({message:"Usuario Adicionado com Sucesso!!"});
        }catch(erro){
            return res.status(400).json({message:"Erro ao adicionar Usuario",erro})
        }
    }
}

module.exports = new ControllerUser();