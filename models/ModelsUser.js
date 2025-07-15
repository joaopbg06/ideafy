const banco = require('../config/ConexaoDB');

class User{
    constructor(id,nome,email,senha){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    static ListarUser(callback){
        const query = "SELECT * FROM users";
        banco.query(query,callback);
    }
    AdicionarUser(callback){
        const query = "INSERT INTO users(nome,email,senha) VALUES (?,?,?)";
        banco.query(query,[this.nome, this.email, this.senha],callback);
    }
    VerificarLogin(callback){
        const query = "SELECT * FROM users WHERE email = ? AND senha = ?";
        banco.query(query,[this.email,this.senha],callback)
    }
}

module.exports = User;