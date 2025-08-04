const User = require('../models/User');

class ControllerLogin{
    async CheckLogin(req,res){
        const {email,password}= req.body;
        
        if(!email || !password){
            return res.status(400).json({message:"Preencha todos os campos!!"});
        }

        try{
            const usuario = await User.findOne({ where: {email,password} });

            // verificação de email ou senha errados
            if(!usuario){
                // 401 nao autorizado
                return res.status(401).json({message:"Email ou Senha Incorretos"});
            }

            return res.status(200).json({message:"Login realizado com Sucesso!!"});
        }

        catch(erro){
            return res.status(400).json({message:"Erro ao Logar",erro});
        }   
    };
}


module.exports = new ControllerLogin();
