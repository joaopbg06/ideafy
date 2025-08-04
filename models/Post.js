const {DataTypes} = require('sequelize');
const sequelize = require('../config/DB');
const User = require('./User');

const Posts = sequelize.define('Posts',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
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