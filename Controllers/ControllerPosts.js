const Post = require('../models/Post')

class ControllerPost{
    async AddPost(req,res){
        const {title,description,UserId} = req.body;

        //adicionar UserId para saber qual usuario esta fazendo o post
        if(!title && !description){
            return res.status(400).json({message:"Preencha todos os campos"});
        }

        try{
            await Post.create({title,description,UserId});

            return res.status(201).json({message: "Post Adicionado com sucesso!!"});
        }catch(erro){
            return res.status(400).json({message:"Erro ao adicionar Post", erro});
        }
    }

    async ViewPosts(req,res){
        try{
            const resultado = await Post.findAll();

            return res.status(200).json(resultado);
        }catch(erro){
            return res.status(400).json({message: "Erro ao buscar Posts",erro});
        }
    }

    // async VerSeusPosts(req,res){
    //     const {UserId}= req.body;

    //     if(!UserId){
    //         return res.status(400).json({message:"Informe o UserId"})
    //     }
    //     try{
    //         const resultado = await Post.findAll({ where: UserId});

    //         return res.status(200).json(resultado);
    //     }catch(erro){
    //         return res.status(400).json({message: "Erro ao buscar Seus Posts",erro});
    //     }
    // }

}

module.exports = new ControllerPost();