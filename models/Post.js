const {DataTypes} = require('sequelize');
const sequelize = require('../config/ConexaoDB');
const User = require('./User');

const Posts = sequelize.define('Posts',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    titulo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descricacao:{
        type:DataTypes.STRING,
        allowNull:true
    },
    UserId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        // foreign key 
        references:{
            model:User, // referencia a tabela
            key:'id' // referencia o campo da tabela
        }
    }

},{
    tableName:'Posts',
    timestamps:true
});

module.exports = Posts;