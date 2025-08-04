// tabela usuarios
// importacao do Datatypes
const {DataTypes} = require('sequelize');
const sequelize = require('../config/DB');

const User = sequelize.define('User',{
    // Inserindo os campos da tabela users 
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }   
},{   
    tableName:'users',//definindo nome da tabela do banco
    timestamps:false // desativa o createdAT e updatedAT (registro de data e hora)
}
)

module.exports = User;