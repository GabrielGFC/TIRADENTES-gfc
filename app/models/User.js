const {Sequelize, DataTypes, INTEGER, STRING } = require('sequelize');
const sequelize = require('../config/database');

const User =sequelize.define('User', {
    cpf:{
        type:DataTypes.STRING(11), //FORMATO 123.456.789-09
        allowNull: false,
        primatyKey:true,
        unique : true,
    },
    password:{
        type:STRING(255),
        allowNull:false,
    },
    nameComplete:{
        type:STRING(15),
        allowNull:false,
    },
    rg:{
        type:INTEGER(14),
        allowNull:false,
        unique:true,
    },
    telefone:{
        type:INTEGER(20),
        allowNull:false,
    },
    dataNascimento:{
        type:DataTypes.STRING(10),
        allowNull:false,
    },
    profissao:{
        type:STRING(255),
    },
    estadoCivil:{
        type:STRING(20),
        allowNull:false,
    },
    sexo:{
        type:STRING(20),
        allowNull:false,
    },
    email:{
        type:STRING(255),
        allowNull:false,
    },
    mae:{
        type:STRING(255),
        allowNull:false,
    },
    pai:{
        type:STRING(255),
        allowNull:false,
    },
    paisOrigem:{
        type:STRING(255),
        allowNull:false,
    },
    cep:{
        type:DataTypes.STRING(9),
        allowNull:false,
    },
    logradouro:{
        type:STRING(255),
        allowNull:false,
    },
    numero:{
        type:INTEGER(20),
        allowNull:false,
    },
    complemento:{
        type:STRING(255),
    },
    bairro:{
        type:STRING(255),
        allowNull:false,
    },
    cidade:{
        type:STRING(255),
        allowNull:false,
    },
    estado:{
        type:STRING(50),
        allowNull:false,
    },
});

module.exports = User;
